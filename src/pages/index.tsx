import { FaAngleDown } from "react-icons/fa";
import { usePresenceContext } from "../context/Lanyard";
import IntroSection from "../components/IntroSection";
import Section from "../components/Section";
import Link from "next/link";

const Home = () => {
    const data = usePresenceContext();

    return (
        <>
            <div id="section-list">
                <IntroSection />
                <Section title="Hello World!" />
            </div>
            <Link href="">
                <FaAngleDown className="text-3xl absolute left-1/2 bottom-3 animate-bounce-slow" />
            </Link>
        </>
    );
};

export default Home;
