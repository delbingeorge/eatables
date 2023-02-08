import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import AppContext from "../component/AppContext";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <SessionProvider session={session}>
                <AppContext value={{ globalData, setGlobalData }}>
                    <Head>
                        {/* <link rel="icon" href="/images/eatables.png" /> */}
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
                </AppContext>
            </SessionProvider>
        </>
    );
}
