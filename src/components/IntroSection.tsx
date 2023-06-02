import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
            <h1 className="absolute bottom-[4rem] font-bold md:leading-tight text-3xl md:text-5xl">
                Hey, I'm Ryan👋
            </h1>
            <Link href="#about" className="absolute w-[30px] h-[30px] bottom-[30px] left-1/2">
                <FaAngleDown className="animate-bounce-slow" size="30" />
            </Link>
        </div>
    );
};
export default IntroSection;
