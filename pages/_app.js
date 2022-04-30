import '../styles/globals.css'



import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Webtrix - Template Customization, Brand Design & Website Maintenance</title>
          <meta name="description" content="Webtrix is one stop website solution provider, we offer cheap and quick contact, professional template customize with very useful features to various industries." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
