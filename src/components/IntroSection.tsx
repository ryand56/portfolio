import { useRef, useState, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/router";
import { FaAngleDown } from "react-icons/fa";

const IntroSection = () => { // m-4 mb-14 md:m-14
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
                I'm an autistic 18 year old Canadian interested in software/web development.
            </h2>
            <div className="absolute bottom-[35px] flex flex-row space-x-1 justify-center">
                <FaAngleDown className="animate-bounce-slow" size="30" />
                <span className="block w-full h-full font-light">Scroll down for more about me</span>
            </div>
        </div>
    );
};
export default IntroSection;
