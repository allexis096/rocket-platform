import App from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import Providers from '../styles/themes/Providers';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <Head>
          <title>Login | Rocketseat</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </Providers>
    );
  }
}

export default MyApp;
