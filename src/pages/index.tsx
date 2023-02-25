import FlowField from "../components/FlowField";

const Home = () => (
    <FlowField style={{
        position: "absolute",
        zIndex: -20,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%"
    }} />
);

export default Home;
