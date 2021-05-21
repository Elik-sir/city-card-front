import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '@styles/theme';
import Head from 'next/head';
import AppLayout from '@shared/AppLayout';
import '../src/styles/main.css';
import LoginPage from './login';

const AppLoader = () => (
  <div className='min-h-screen flex justify-center items-center'>
    {/* <Loader /> */}
    LOADER...
  </div>
);

const AppContent = ({ Component, pageProps }: any) => {
  const [content, setContent] = useState<any>(null);
  const signedIn = false;
  useEffect(() => {
    let result;

    const DefaultContent = () => (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    );

    result =
      signedIn && Component.name !== 'LoginPage' ? (
        <DefaultContent />
      ) : (
        <LoginPage />
      );

    setContent(result);
  }, [signedIn, Component, pageProps]);

  useEffect(() => {
    return () => {
      setContent(null);
    };
  }, []);

  return content;
};

function App(props: any) {
  //const title = useStore($title);
  const [pageTitle, setPageTitle] = useState('Карта города');
  const title = '';
  useEffect(() => {
    let resultTitle = 'Академия Лиги';
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
    <Provider>
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
