/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@app/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import reduxStore from '@app/app/store';
import useInitApp from '@app/hooks/useInitApp.hook';
import Spinner from '@app/components/common/Spinner';

const ReduxInitializedApp = ({ Component, pageProps }: AppProps) => {
  useInitApp();

  return (
    <Component {...pageProps} />
  );
};

const App = (props: AppProps) => {
  return (
    <Provider store={reduxStore.store}>
      <PersistGate loading={<Spinner />} persistor={reduxStore.persistor}>
        <ReduxInitializedApp {...props} />
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
      </PersistGate>
    </Provider>
  );
};

export default App;
