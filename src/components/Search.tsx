import { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';

import Format from '@app/enums/format.enum';
import blobUtils from '@app/utils/blob.utils';
import apiUtils from '@app/utils/api.utils';

import FormatSelector from './FormatSelector';
import Form from './Form';
import Input from './Input';

const initialValues = {
  url: '',
};

interface Props {
  className?: string;
}

const Search = (props: Props) => {
  const { className } = props;
  const [format, setFormat] = useState(Format.MP3);

  const onSubmit = async (values: typeof initialValues) => {
    try {
      const response = await axios.get(`/api/download/${encodeURIComponent(values.url)}?format=${format}`, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: format === Format.MP3 ? 'audio/mpeg' : 'video/mp4' });
      const fileName = apiUtils.getFileNameFromHeaders(response);

      blobUtils.download(blob, fileName);
    } catch (error) {
      // TODO: add error toast
      console.log(error);
    }
  };

  return (
    <div className={clsx('flex flex-col gap-y-4', className)}>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        submitLabel="Download"
        horizontal
      >
        <Input
          name="url"
          type="url"
          placeholder="Enter the link here"
          isRequired
        />
      </Form>
      <FormatSelector
        value={format}
        onChange={setFormat}
        className="mt-4"
      />
    </div>
  );
};

export default Search;
