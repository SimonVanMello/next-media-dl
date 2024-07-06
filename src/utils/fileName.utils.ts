const create = (title: string, format: string) => {
  const sanitizedTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();

  return `${sanitizedTitle}.${format}`;
};

const fileNameUtils = {
  create,
};

export default fileNameUtils;
