import * as React from "react";
import Head from "next/head";
import { PresenceContextProvider } from "../context/Lanyard";
import FlowField from "./FlowField";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
    <>
        <Head>
            <meta charSet="UTF-8" />
            <title>Ryan O.</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="shortcut icon" type="image/png" href="https://dcdn.dstn.to/avatars/660292639412846621.png" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="keywords"
                content="ryand, Ryan O., Ryan, O., web developer, software developer, github"
            />
            <meta name="description" content="Ryan O - Software/Web Developer" />
            <meta name="author" content="Ryan O" />
            <meta name="robots" content="noindex" />
        </Head>
        <FlowField className="fixed -z-20 w-full h-full" />
        <PresenceContextProvider>
            {children}
        </PresenceContextProvider>
    </>
);

export default Layout;
