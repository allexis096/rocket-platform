import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Login | Rocketseat</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
