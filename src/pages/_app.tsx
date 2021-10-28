import { FC, useEffect } from 'react';
import React from 'react';
import Layout from 'Layouts';
import App from 'next/app';

import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: any) => {
  let authenticated = false;
  const request = appContext.ctx.req;

  if (request) {
    // request.cookies = cookie.parse(request.headers.cookie || '');
    // authenticated = !!request.cookies.token;
  }
  // console.log(authenticated);
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, authenticated };
};

export default MyApp;
