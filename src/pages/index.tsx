import { useRef, createRef, useEffect, useCallback, MouseEventHandler } from "react";
import { usePresenceContext } from "../context/Lanyard";
import IntroSection from "../components/IntroSection";
import Section from "../components/Section";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import useScrollSnap from "../hooks/useScrollSnap";
import { easeOutQuint } from "../util/easing";

/* return (
        false ? <>
            <div id="section-list" className="flex flex-col">
                <IntroSection />
                <Section title="Hello World!" />
                <Section title="Test" />
            </div>
            <Link href="">
                <FaAngleDown className="text-3xl absolute left-1/2 bottom-3 animate-bounce-slow" />
            </Link>
        </> : null
    ); */

const Home = () => {
    const data = usePresenceContext();

    const sections = ["About"];
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    sectionRefs.current = [...Array(sections.length).keys()].map(
        (_, i) => sectionRefs.current[i] ?? createRef()
    );

    const containerRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const [bind, unbind] = useScrollSnap(
        containerRef,
        {
            snapDestinationY: "100vh",
            timeout: 0.001,
            threshold: 0.1,
            easing: easeOutQuint
        }
    );

    /* const downOnClick: MouseEventHandler<HTMLAnchorElement> = useCallback((index) => {
        if (containerRef.current) {
            window.scrollTo({
                top: containerRef.current.clientHeight,
                behavior: "smooth"
            });
        }
    }, [containerRef.current]); */

    return (
        <>
            <div
                id="section-list"
                ref={containerRef} 
                className="flex flex-col absolute top-0 left-0 h-screen w-screen overflow-x-hidden"
            >
                <IntroSection />
                <Section id="about" title="About" />
            </div>
        </>
    );
};

export default Home;
