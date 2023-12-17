import "../styles/globals.css";
import Head from "next/head";
import "@fontsource/poppins/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{fontFamily:"'Poppins', sans-serif"}}>
        <Head>
          <title>DEMO</title>
        </Head>
        <Component {...pageProps}/>
      </div>
    </>
  );
}

export default MyApp;
