import clsx from 'clsx';

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

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
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
      <FormatSelector className="mt-4" />
    </div>
  );
};

export default Search;
