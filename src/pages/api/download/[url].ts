import { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';

import Format from '@app/enums/format.enum';
import HttpMethod from '@app/enums/httpMethod.enum';
import fileNameUtils from '@app/utils/fileName.utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HttpMethod.GET) {
    res.setHeader('Allow', [HttpMethod.GET]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { url, format } = req.query;

  if (typeof url !== 'string' || typeof format !== 'string') {
    res.status(400).json({ error: 'Invalid URL or format' });
    return;
  }

  if (!ytdl.validateURL(url)) {
    res.status(400).json({ error: 'Invalid URL' });
    return;
  }

  // @ts-ignore
  if (!Object.values(Format).includes(format)) {
    res.status(400).json({ error: 'Invalid format' });
    return;
  }

  try {
    const info = await ytdl.getInfo(url);
    const { title } = info.videoDetails;

    const fileName = fileNameUtils.create(title, format);

    const contentType = format === 'mp3' ? 'audio/mpeg' : 'video/mp4';
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', contentType);

    const videoStream = ytdl(url, {
      filter: format === 'mp3' ? 'audioonly' : 'audioandvideo',
    });

    videoStream.pipe(res);
  } catch (error) {
    console.error('Error downloading video:', error);
    res.status(400).json({ error: 'Failed to download video' });
  }
};

export default handler;
