import { useCallback, useRef, useEffect } from "react";

// Utility helper for random number generation
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const useRandomInterval = (
    callback: () => void,
    minDelay: number,
    maxDelay: number
) => {
  const timeoutId = useRef<number>(null) as React.MutableRefObject<number>;
  const savedCallback = useRef<() => void>(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    let isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
  const cancel = useCallback(() => {
    clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};
export default useRandomInterval;
