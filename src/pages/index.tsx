import { useRef, useEffect } from "react";
import { usePresenceContext } from "../context/Lanyard";
import IntroSection from "../components/IntroSection";
import Section from "../components/Section";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import useScrollSnap from "../hooks/useScrollSnap";

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

    const containerRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const [bind, unbind] = useScrollSnap(
        containerRef,
        { snapDestinationY: "100vh" }
    );

    const onScroll = (event: WheelEvent) => {
        if (containerRef.current) {
            switch (event.deltaMode) {
                case 0:
                    containerRef.current.scrollTop += event.deltaY;
                    containerRef.current.scrollLeft += event.deltaX;
                    break;
                case 1:
                    containerRef.current.scrollTop += 8*event.deltaY;
                    containerRef.current.scrollLeft += 8*event.deltaX;
                    break;
                case 2:
                    containerRef.current.scrollTop += 0.03*event.deltaY;
                    containerRef.current.scrollLeft += 0.03*event.deltaX;
                    break;
            }
            event.stopPropagation();
            event.preventDefault();
        }
    };

    /* 
        -------------------------------------------------------------------
        pointer-events-none
        -------------------------------------------------------------------

        useEffect(() => {
            document.addEventListener("wheel", onScroll);
            return () => document.removeEventListener("wheel", onScroll);
        }, [containerRef.current]); 
    */

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
