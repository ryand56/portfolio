import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
    <Layout>
        <Component {...pageProps} key={router.pathname} />
    </Layout>
);

export default MyApp;
