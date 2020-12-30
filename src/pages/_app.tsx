import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>testing</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
