interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
}

const Spinner = (props: Props) => {
  const {
    size = 'lg',
    type = 'spinner',
  } = props;

  return (
    <div className="w-full h-full flex justify-center align-center">
      <span className={`loading loading-${type} loading-${size}`} />
    </div>
  );
};

export default Spinner;
