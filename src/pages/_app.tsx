/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '@app/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const animate = () => {
      const animateElements = document.querySelectorAll('.animate');

      animateElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('show');
        }, index * 150);
      });
    };

    const onScroll = () => {
      if (window.scrollY > 0) {
        document.documentElement.classList.add('scrolled');
      } else {
        document.documentElement.classList.remove('scrolled');
      }
    };

    animate();

    document.addEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
