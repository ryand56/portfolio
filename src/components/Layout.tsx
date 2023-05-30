import * as React from "react";
import Head from "next/head";
import { PresenceContextProvider } from "../context/Lanyard";
import FlowField from "./FlowField";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => ( // top-0 left-0 right-0 bottom-0
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
        <PresenceContextProvider>
            <FlowField className="absolute -z-20 w-full h-full block" />
            <div>
                {children}
            </div>
        </PresenceContextProvider>
    </>
);

export default Layout;
