import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider, useSelector } from 'react-redux';
import { store } from 'redux/store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '@styles/theme';
import AppLayout from '@shared/AppLayout';
import '../src/styles/main.css';
import LoginPage from './login';
import RegistrationPage from './registration';

const AppLoader = () => (
  <div className='min-h-screen flex justify-center items-center'>
    {/* <Loader /> */}
    LOADER...
  </div>
);

const AppContent = ({ Component, pageProps }: any) => {
  const [content, setContent] = useState<any>(null);

  const user = useSelector<any>((store) => store.userReducer?.user);
  const router = useRouter();
  const signedIn = useSelector<any>((store) => store.userReducer?.signin);

  useEffect(() => {
    let result;
    const jwt = localStorage.getItem('jwt');
    const DefaultContent = () => (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    );
    if (
      (signedIn || jwt) &&
      (Component.name === 'LoginPage' ||
        Component.name === 'RegistrationPage') &&
      router.route !== '/'
    ) {
      router.push('/');
    }

    result =
      (signedIn || jwt) &&
      Component.name !== 'LoginPage' &&
      Component.name !== 'RegistrationPage' ? (
        <DefaultContent />
      ) : Component.name === 'RegistrationPage' ? (
        <RegistrationPage />
      ) : (
        <LoginPage />
      );

    setContent(result);
  }, [signedIn, Component, pageProps]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    return () => {
      setContent(null);
    };
  }, []);

  return content;
};

function App(props: any) {
  const [pageTitle, setPageTitle] = useState('Карта города');
  const title = '';
  useEffect(() => {
    let resultTitle = 'Карта города Новороссийск';
    const additionalTitle = title ?? props.Component.config?.pageTitle;
    if (additionalTitle) resultTitle += ` | ${additionalTitle}`;

    setPageTitle(resultTitle);
  }, [title]);

  useEffect(() => {
    return () => {
      setPageTitle('Карта города');
    };
  }, []);
  const authResponse = true;
  const authError = true;
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta charSet='utf-8' />
          <title>{pageTitle}</title>
        </Head>
        {!authResponse && !authError ? (
          <AppLoader />
        ) : (
          <AppContent {...props} />
        )}
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
