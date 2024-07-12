import clsx from 'clsx';
import { toast } from 'react-toastify';

import Format from '@app/enums/format.enum';
import blobUtils from '@app/utils/blob.utils';
import apiUtils from '@app/utils/api.utils';
import useAppSelector from '@app/hooks/useAppSelector.hook';
import userSettingsSelectors from '@app/selectors/userSettings.selectors';
import downloadService from '@app/services/download.service';

import FormatSelector from './settings/FormatSelector';
import Form from './Inputs/Form';
import Input from './Inputs/Input';

const initialValues = {
  url: '',
};

interface Props {
  className?: string;
}

const Search = (props: Props) => {
  const { className } = props;

  const userSettings = useAppSelector(userSettingsSelectors.selectUserSettings);

  const onSubmit = async (values: typeof initialValues) => {
    try {
      const response = await downloadService.downloadMedia({
        url: values.url,
        format: userSettings.format,
        quality: userSettings[userSettings.format].preferedQuality,
      });

      const blob = new Blob([response.data], { type: userSettings.format === Format.MP3 ? 'audio/mpeg' : 'video/mp4' });
      const fileName = apiUtils.getFileNameFromHeaders(response);

      blobUtils.download(blob, fileName);
    } catch (error) {
      toast.error('An error occured while downloading the media.');
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
      <FormatSelector className="mt-4 animate" />
    </div>
  );
};

export default Search;
