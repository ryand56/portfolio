import { useRef, useState, useEffect, MouseEventHandler } from "react";
import { Data } from "use-lanyard";
import { useRouter } from "next/router";
import Age from "./Age";
import CircleStatus from "./CircleStatus";
import { FaAngleDown, FaGithub, FaTwitter, FaLinkedin, FaKeybase } from "react-icons/fa";
import { SiGitea } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

interface IntroSectionProps {
    presence?: Data
};

const IntroSection = ({ presence }: IntroSectionProps) => { // m-4 mb-14 md:m-14
    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const [isVisible, setIsVisible] = useState<boolean>(true);
    let observer: IntersectionObserver;
    const observerCallback: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    };

    useEffect(() => {
        observer = new IntersectionObserver(observerCallback);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef.current, observerOptions]);

    useEffect(() => {
        if (isVisible) router.push("/");
    }, [isVisible]);

    return (
        <div ref={containerRef} className="flex relative min-h-screen h-screen w-screen p-14">
            <h1 className="absolute bottom-[7rem] font-bold md:leading-tight text-3xl md:text-5xl">
                Hey, I'm Ryan👋
            </h1>
            <h2 className="absolute bottom-[5rem] font-semibold md:leading-tight text-xs md:text-lg">
                I'm an autistic {presence && <><Age date={new Date(presence?.kv.birthday ?? "07/06/2004")} /> {" year old"}</>} Canadian interested in software/web development.
            </h2>
            <div className="absolute bottom-[35px] flex flex-row space-x-1 justify-center">
                <FaAngleDown className="animate-bounce-slow" size="30" />
                <span className="block w-full h-full font-light">Scroll down for more about me</span>
            </div>
            <div id="active_status" className="absolute md2max:top-[20px] md2:bottom-[70px] right-12 flex flex-row space-x-1.5 justify-center items-center">
                <CircleStatus data={presence} />
            </div>
            <div className="absolute md2:bottom-[42px] right-12 flex flex-row space-x-3 justify-center items-center">
                <a href="https://github.com/elementemerald" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://git.ryand.ca" target="_blank">
                    <SiGitea />
                </a>
                <a href="https://twitter.com/elementemerald" target="_blank">
                    <FaTwitter />
                </a>
                <a href="https://ca.linkedin.com/in/ryand56" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://keybase.io/ryand56" target="_blank">
                    <FaKeybase />
                </a>
                <a href="mailto:contact@ryand.ca" target="_blank">
                    <MdOutlineEmail />
                </a>
            </div>
        </div>
    );
};
export default IntroSection;
