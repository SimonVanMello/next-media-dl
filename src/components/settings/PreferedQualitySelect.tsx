import Format from '@app/enums/format.enum';
import MediaQuality from '@app/enums/mediaQuality.enum';
import useAppDispatch from '@app/hooks/useAppDispatch.hook';
import { userSettingsActions } from '@app/slices/userSettings.slice';
import useAppSelector from '@app/hooks/useAppSelector.hook';
import userSettingsSelectors from '@app/selectors/userSettings.selectors';

import Select from '../Inputs/Select';

const mapFormatToLabel: Record<MediaQuality, string> = {
  [MediaQuality.HIGHEST]: 'highest',
  [MediaQuality.LOWEST]: 'lowest',
  [MediaQuality.HIGHEST_AUDIO]: 'highest audio',
  [MediaQuality.LOWEST_AUDIO]: 'lowest audio',
  [MediaQuality.HIGHEST_VIDEO]: 'highest video',
  [MediaQuality.LOWEST_VIDEO]: 'lowest video',
};

interface Props {
  format: Format;
}

const PreferedQualitySelect = (props: Props) => {
  const { format } = props;

  const dispatch = useAppDispatch();
  const userSettings = useAppSelector(userSettingsSelectors.selectUserSettings);

  const onChange = (preferedQuality: MediaQuality) => {
    dispatch(userSettingsActions.updatePreferedQuality({
      format,
      preferedQuality,
    }));
  };

  return (
    <Select
      options={Object.keys(MediaQuality).map((x) => ({
        value: MediaQuality[x as keyof typeof MediaQuality],
        label: mapFormatToLabel[MediaQuality[x as keyof typeof MediaQuality]],
      }))}
      value={userSettings[format].preferedQuality}
      onChange={onChange}
      className="w-full"
      label="download quality"
    />
  );
};

export default PreferedQualitySelect;
