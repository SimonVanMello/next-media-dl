import clsx from 'clsx';

interface Props<T extends string | number> {
  options: { value: T, label: string | number }[],
  value: T;
  onChange: (value: T) => void;
  className?: string;
  label?: string;
}

const Select = <T extends string | number>(props: Props<T>) => {
  const {
    options,
    value,
    onChange,
    className,
    label,
  } = props;

  return (
    <div>
      {label && <h3 className="mb-2">{label}</h3>}
      <select
        className={clsx('select select-bordered', className)}
        onChange={(e) => onChange(e.target.value as T)}
        value={value}
      >
        {options.map((x) => (
          <option key={x.label} value={x.value}>{x.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
