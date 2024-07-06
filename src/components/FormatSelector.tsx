import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';

import Format from '@app/enums/format.enum';

interface Props {
  onChange?: (format: Format) => void;
  className?: string;
}

const FormatSelector = (props: Props) => {
  const { onChange, className } = props;
  const [format, setFormat] = useState(Format.MP3);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newFormat = event.target.value as Format;

    setFormat(newFormat);

    if (onChange) {
      onChange(newFormat);
    }
  };

  return (
    <select
      className={clsx('animate select select-bordered max-w-fit', className)}
      onChange={handleChange}
      value={format}
    >
      {Object.values(Format).map((x) => (
        <option key={x}>{x}</option>
      ))}
    </select>
  );
};

export default FormatSelector;
