import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
    <>
        <Head>
            <meta charSet="UTF-8" />
            <title>Ryan Omasta</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="shortcut icon" type="image/png" href="https://dcdn.dstn.to/avatars/660292639412846621.png" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="keywords"
                content="ryand, Ryan Omasta, Ryan, Omasta, web developer, software developer, github, javascript"
            />
            <meta name="description" content="Ryan Omasta - Software/Web Developer" />
            <meta name="author" content="Ryan Omasta" />
        </Head>
        <Component {...pageProps} key={router.pathname} />
    </>
);

export default MyApp;
