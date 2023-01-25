import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Eatables Official</title>
                {/* <link rel="icon" type="image/x-icon" href="public/eatables.png" /> */}
            </Head>
            <NextNProgress color="#000" startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
            <Component {...pageProps} />
        </>
    );
}
