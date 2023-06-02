import { useEffect, useState } from "react";
import createScrollSnap from "scroll-snap";

export interface ScrollSnapSettings {
    snapDestinationX?: string;
    snapDestinationY?: string;
    timeout?: number;
    duration?: number;
    threshold?: number;
    snapStop?: boolean;
    easing?: (t: number) => number;
};

const useScrollSnap = (
    ref: React.MutableRefObject<HTMLElement>,
    settings?: ScrollSnapSettings,
    callback?: () => void
) => {
    const [scrollBind, setBind] = useState(() => () => {});
    const [scrollUnbind, setUnbind] = useState(() => () => {});

    useEffect(() => {
        const element = ref.current;

        if (element) {
            const { bind, unbind } = createScrollSnap(element, settings, callback);
            setBind(() => bind);
            setUnbind(() => unbind);
        }
    }, []);

    return [scrollBind, scrollUnbind];
};
export default useScrollSnap;
