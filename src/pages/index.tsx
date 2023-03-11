import FlowField from "../components/FlowField";

const Home = () => (
    <div>
        <FlowField className="absolute -z-20 top-0 left-0 right-0 bottom-0 w-full h-full" />
        <div className="m-4 mb-14 md:m-14 flex flex-col absolute bottom-0">
            <h1 className="font-bold md:leading-tight text-3xl md:text-6xl">
                Hey, I'm Ryan👌
            </h1>
        </div>
    </div>
);

export default Home;
