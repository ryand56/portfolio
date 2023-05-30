import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const IntroSection = () => ( // m-4 mb-14 md:m-14
    <div className="flex relative min-h-screen h-screen w-screen p-14">
        <h1 className="absolute bottom-[4rem] font-bold md:leading-tight text-3xl md:text-5xl">
            Hey, I'm Ryan👋
        </h1>
        <Link href="">
            <FaAngleDown className="absolute relative left-1/2 bottom-0 animate-bounce-slow" size="30" />
        </Link>
    </div>
);
export default IntroSection;
