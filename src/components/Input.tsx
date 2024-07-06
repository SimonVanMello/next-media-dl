/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  value?: string | number;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
  const {
    name,
    type,
    label,
    placeholder,
    isRequired,
    value,
    onChange,
  } = props;
  const { register, getFieldState } = useFormContext();
  const { invalid, error, isTouched } = getFieldState(name);

  return (
    <label className="animate form-control w-full" htmlFor={name}>
      {label && (
        <div className="label">
          <span className="label-text">
            {label}
            {isRequired && <span className="text-red-600">*</span>}
          </span>
        </div>
      )}
      <input
        {...register(name)}
        name={name}
        placeholder={placeholder}
        className={clsx('animate input input-bordered w-full', {
          'input-error': invalid && error && isTouched,
        })}
        type={type}
        tabIndex={0}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
      {invalid && error && isTouched && (
        <div className="label">
          <span className="label-text-alt">{error.message}</span>
        </div>
      )}
    </label>
  );
};

export default Input;
