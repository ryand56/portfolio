interface TransitionDuration {
    enter: number;
    exit: number;
}

interface TransitionSettings {
    duration: TransitionDuration;
}

interface ScrollSnapOptions {
    start?: number;
    indexChanged?: () => void;
    transition?: TransitionSettings;
    orientation?: "vertical" | "horizontal";
}

const ScrollSnapWrapper = () => null; // WIP
export default ScrollSnapWrapper;
