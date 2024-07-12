import { useDispatch, useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { userSettingsActions } from '@app/slices/userSettings.slice';
import userSettingsSelectors from '@app/selectors/userSettings.selectors';
import Format from '@app/enums/format.enum';

import Select from '../Inputs/Select';

interface Props {
  className?: string;
}

const FormatSelector = (props: Props) => {
  const { className } = props;

  const dispatch = useDispatch();
  const userSettings = useSelector(userSettingsSelectors.selectUserSettings);

  const onChange = (format: Format) => {
    dispatch(userSettingsActions.updateFormat({
      format,
    }));
  };

  return (
    <Select
      options={Object.keys(Format).map((x) => ({
        value: Format[x as keyof typeof Format],
        label: x,
      }))}
      value={userSettings.format}
      onChange={onChange}
      className={clsx('max-w-fit', className)}
    />
  );
};

export default FormatSelector;
