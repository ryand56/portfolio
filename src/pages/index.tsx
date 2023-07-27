import { useRef, createRef, useEffect, useCallback, MouseEventHandler } from "react";
import { usePresenceContext } from "../context/Lanyard";
import IntroSection from "../components/IntroSection";
import Section from "../components/Section";
import Link from "next/link";
import Image from "next/image";
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
                <IntroSection presence={data} />
                <Section id="about" title="About">
                    <div id="about_content_intro" className="flex flex-col space-y-2.5 w-[250px] float-left">
                        <div id="about_content_intro-pt1" className="text-sm font-light">
                            Hi there, my name is Ryan. I go by he/him and I loved developing software and web applications since I was 9.
                        </div>
                        <div id="about_content_intro-pt2" className="text-sm font-light">
                            I have created many different projects that are open-sourced and easy to use.
                        </div>
                    </div>
                    <div className="relative float-right">
                        <Image
                            src="https://dcdn.dstn.to/avatars/660292639412846621.png"
                            alt="Onyx"
                            width={128}
                            height={128}
                            className="rounded-full"
                        />
                    </div>
                    <div id="about_content_emoji" className="absolute mt-[185px] underline">
                        <a href="https://youtu.be/pWcWbDSo1uQ?t=5" target="_blank">ᕕ (ᐛ) ᕗ</a>
                    </div>
                </Section>
                <Section id="specs" title="Specs">
                    <div id="pc-specs" className="text-sm font-bold mb-2">Main PC</div>
                    <div id="pc-specs-mobo" className="flex flex-row space-x-1">
                        <div id="pc-specs-mobo-title" className="text-sm font-semibold">Motherboard</div>
                        <div id="pc-specs-mobo-info" className="text-sm font-light">MSI B550-A PRO</div>
                    </div>
                    <div id="pc-specs-cpu" className="flex flex-row space-x-1">
                        <div id="pc-specs-cpu-title" className="text-sm font-semibold">CPU</div>
                        <div id="pc-specs-cpu-info" className="text-sm font-light">AMD Ryzen 7 5800X3D</div>
                    </div>
                    <div id="pc-specs-gpu" className="flex flex-row space-x-1">
                        <div id="pc-specs-gpu-title" className="text-sm font-semibold">GPU</div>
                        <div id="pc-specs-gpu-info" className="text-sm font-light">EVGA GeForce GTX 1080 Ti FTW3</div>
                    </div>
                    <div id="pc-specs-mem" className="flex flex-row space-x-1">
                        <div id="pc-specs-mem-title" className="text-sm font-semibold">Memory</div>
                        <div id="pc-specs-mem-info" className="text-sm font-light">32 GB</div>
                    </div>
                    <div id="pc-specs-hdd-main" className="flex flex-row space-x-1">
                        <div id="pc-specs-hdd-main-title" className="text-sm font-semibold">Main Drive</div>
                        <div id="pc-specs-hdd-main-info" className="text-sm font-light">Samsung SSD 870 QVO 1TB</div>
                    </div>
                    <div id="pc-specs-hdd-storage" className="flex flex-row space-x-1">
                    <div id="pc-specs-hdd-storage-title" className="text-sm font-semibold">Storage Drive</div>
                        <div id="pc-specs-hdd-storage-info" className="text-sm font-light">Toshiba DT01ACA100 1TB</div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Home;
