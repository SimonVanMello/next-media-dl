import { PropsWithChildren } from 'react';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="flex flex-col mx-auto max-w-screen-sm px-5">
      {children}
    </div>
  );
};

export default Layout;
