import * as React from "react";
import type { Data } from "use-lanyard";
import { useLanyardWS } from "use-lanyard";

interface PresenceContextProviderProps {
    children: React.ReactNode;
}

const PresenceContext = React.createContext<Data | undefined>(undefined);

export const PresenceContextProvider = ({ children }: PresenceContextProviderProps) => {
    const data = process.env.NODE_ENV === 'production' ? useLanyardWS("660292639412846621") : undefined;
    //const data = useLanyardWS("660292639412846621");

    return (
        <PresenceContext.Provider value={data}>
            {children}
        </PresenceContext.Provider>
    );
};

export const usePresenceContext = () => React.useContext(PresenceContext);
