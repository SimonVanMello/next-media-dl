/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {
  FormEventHandler,
  PropsWithChildren,
} from 'react';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

interface Props<T extends FieldValues> {
  initialValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  submitLabel?: string;
  disabled?: boolean;
  onChange?: FormEventHandler<HTMLFormElement>;
  horizontal?: boolean;
}

const Form = <T extends FieldValues>(props: PropsWithChildren<Props<T>>) => {
  const {
    children,
    initialValues,
    onSubmit,
    submitLabel,
    onChange,
    disabled,
    horizontal,
  } = props;

  const methods = useForm<T>({ defaultValues: initialValues, mode: 'all' });

  const handleSubmit = async (data: T) => {
    await onSubmit(data);
    methods.reset(initialValues);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} onChange={onChange}>
        <div className={clsx('animate flex w-full', {
          'flex-col gap-y-4': !horizontal,
          'flex-row gap-x-4': horizontal,
        })}
        >
          {children}
          <button
            className={clsx('btn btn-outlined', {
              'loading loading-spinner': methods.formState.isSubmitting,
              'mt-6 w-full': !horizontal,
            })}
            type="submit"
            disabled={disabled}
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
