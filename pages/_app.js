import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'highlight.js/styles/night-owl.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AzLim&lsquo;s Blog</title>
        <meta
          name="AzizLimonu Blog"
          content="Next js Blog with markdown js"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
