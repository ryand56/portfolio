import { useEffect } from "react";
import { usePresenceContext } from "../context/Lanyard";

const Home = () => {
    const data = usePresenceContext();

    return (
        <div className="m-4 mb-14 md:m-14 flex flex-col absolute bottom-0">
            <h1 className="font-bold md:leading-tight text-3xl md:text-6xl">
                Hey, I'm Ryan👋
            </h1>
        </div>
    );
};

export default Home;
