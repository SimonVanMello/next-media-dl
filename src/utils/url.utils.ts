import url from 'url';

const determineUrlType = (youtubeUrl: string) => {
  const parsedUrl = url.parse(youtubeUrl, true);

  if (parsedUrl.query.v) {
    return 'video';
  }

  if (parsedUrl.query.list) {
    return 'playlist';
  }

  return 'unknown';
};

const urlUtils = {
  determineUrlType,
};

export default urlUtils;
