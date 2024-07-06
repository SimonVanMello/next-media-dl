import { AxiosResponse } from 'axios';

const getFileNameFromHeaders = (response: AxiosResponse) => {
  const contentDisposition = response.headers['content-disposition'];
  const parts = contentDisposition.split('filename=');
  return parts[1].replace(/"/g, '').trim();
};

const apiUtils = {
  getFileNameFromHeaders,
};

export default apiUtils;
