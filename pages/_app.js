import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <SessionProvider session={session}>
                <Head>
                    <title>Eatables Official</title>
                </Head>
                <NextNProgress
                    color="#000"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={5}
                    showOnShallow={true}
                    options={{ showSpinner: false }}
                />
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}
