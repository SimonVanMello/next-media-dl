/* eslint-disable max-len */
import { NextApiRequest, NextApiResponse } from 'next';
import ytdl from '@distube/ytdl-core';
import ytpl from '@distube/ytpl';
import { Readable } from 'stream';

import Format from '@app/enums/format.enum';
import HttpMethod from '@app/enums/httpMethod.enum';
import fileNameUtils from '@app/utils/fileName.utils';
import MediaQuality from '@app/enums/mediaQuality.enum';
import urlUtils from '@app/utils/url.utils';

const archiver = require('archiver');

interface DownloadMediaParams {
  url: string;
  quality: MediaQuality;
  format: Format;
}

interface DownloadVideoOutput {
  stream: Readable;
  fileName: string;
}

const downloadVideo = async (params: DownloadMediaParams): Promise<DownloadVideoOutput> => {
  const {
    url,
    quality,
    format,
  } = params;

  const info = await ytdl.getInfo(url);
  const { title } = info.videoDetails;

  const fileName = fileNameUtils.create(title, format);

  const videoStream = ytdl(url, {
    filter: format === 'mp3' ? 'audioonly' : 'audioandvideo',
    quality,
  });

  return { stream: videoStream, fileName };
};

const downloadPlaylist = async (params: DownloadMediaParams) => {
  const { url, format, quality } = params;

  const playlist = await ytpl(url);

  const streams = await Promise.all(
    playlist.items.map(async (item) => {
      const output = await downloadVideo({ url: item.url, format, quality });
      return output;
    }),
  );

  return streams;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HttpMethod.GET) {
    res.setHeader('Allow', [HttpMethod.GET]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const {
    url,
    format,
    quality,
  } = req.query as { url: string, format: Format, quality: MediaQuality };

  if (typeof url !== 'string' || typeof format !== 'string') {
    res.status(400).json({ error: 'Invalid URL or format' });
    return;
  }

  // @ts-ignore
  if (!Object.values(Format).includes(format)) {
    res.status(400).json({ error: 'Invalid format' });
    return;
  }

  // @ts-ignore
  if (!Object.values(MediaQuality).includes(quality)) {
    res.status(400).json({ error: 'Invalid quality' });
    return;
  }

  const urlType = urlUtils.determineUrlType(url);

  try {
    if (urlType === 'video') {
      if (!ytdl.validateURL(url)) {
        res.status(400).json({ error: 'Invalid URL' });
        return;
      }

      const { stream, fileName } = await downloadVideo({ url, format, quality });

      const contentType = format === 'mp3' ? 'audio/mpeg' : 'video/mp4';

      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.setHeader('Content-Type', contentType);

      stream.pipe(res);
    } else if (urlType === 'playlist') {
      const streams = await downloadPlaylist({ url, format, quality });

      const archive = archiver('zip');

      res.setHeader('Content-Disposition', 'attachment; filename="output.zip"');
      res.setHeader('Content-Type', 'application/zip');

      archive.pipe(res);

      streams.forEach(({ stream, fileName }) => {
        archive.append(stream, { name: fileName });
      });

      archive.finalize();
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to download video' });
  }
};

export default handler;
