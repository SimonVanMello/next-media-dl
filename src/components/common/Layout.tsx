import { PropsWithChildren } from 'react';
import Head from 'next/head';

import Footer from './Footer';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Media Downloader</title>
        <meta name="description" content="Video/songs downloader" />
        <meta property="og:title" content="Media Downloader" />
        <meta property="og:description" content="Video/songs downloader" />
      </Head>
      <main className="flex flex-col w-full">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
