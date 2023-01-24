import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextNProgress color="#000" startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
            <Component {...pageProps} />
        </>
    );
}
