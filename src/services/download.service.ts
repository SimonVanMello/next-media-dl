import Format from '@app/enums/format.enum';
import MediaQuality from '@app/enums/mediaQuality.enum';
import axios from 'axios';
import queryString from 'query-string';

const baseEndpoint = '/api/download';

interface DownloadMediaParams {
  url: string;
  format: Format;
  quality: MediaQuality;
}

const downloadMedia = (params: DownloadMediaParams) => {
  const queryParams = queryString.stringify(params, { strict: false });

  return axios.get(`${baseEndpoint}?${queryParams}`, {
    responseType: 'blob',
  });
};

const downloadService = {
  downloadMedia,
};

export default downloadService;
