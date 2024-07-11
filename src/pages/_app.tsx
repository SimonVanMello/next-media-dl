/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import '@app/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import store from '@app/app/store';
import useInitApp from '@app/hooks/useInitApp.hook';

const App = ({ Component, pageProps }: AppProps) => {
  useInitApp();

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
