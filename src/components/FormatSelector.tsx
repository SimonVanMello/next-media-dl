import clsx from 'clsx';

import Format from '@app/enums/format.enum';

interface Props {
  value: Format;
  onChange: (value: Format) => void;
  className?: string;
}

const FormatSelector = (props: Props) => {
  const { value, onChange, className } = props;

  return (
    <select
      className={clsx('animate select select-bordered max-w-fit', className)}
      onChange={(e) => onChange(e.target.value as Format)}
      value={value}
    >
      {Object.values(Format).map((x) => (
        <option key={x}>{x}</option>
      ))}
    </select>
  );
};

export default FormatSelector;
