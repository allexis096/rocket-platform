import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Login | Rocketseat</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
