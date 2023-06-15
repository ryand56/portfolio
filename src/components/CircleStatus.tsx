import { useEffect, useState } from "react";
import { Data } from "use-lanyard";

interface StatusMap {
    online: string;
    idle: string;
    dnd: string;
    offline: string;
    unknown: string;
};

const StatusColors: StatusMap = {
    online: "#23a55a",
    idle: "#f0b232",
    dnd: "#f23f43",
    offline: "#80848e",
    unknown: "#0284c7"
};

const StatusText: StatusMap = {
    online: "I'm currently active!",
    idle: "I'm currently away, be back soon!",
    dnd: "I'm currently busy/working.",
    offline: "I'm currently offline.",
    unknown: "Unable to reach the Lanyard API, status is unknown."
};

interface CircleStatusProps {
    data?: Data;
};

const CircleStatus = ({ data }: CircleStatusProps) => {
    const [status, setStatus] = useState<"online" | "idle" | "dnd" | "offline" | "unknown">("unknown");

    useEffect(() => {
        if (data) setStatus(data.discord_status);
    }, [data]);

    return (
        <div className="flex flex-row space-x-1.5 justify-center items-center">
            <span className="relative flex h-3 w-3">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: StatusColors[status] }}
                ></span>
                <span
                    className="relative inline-flex rounded-full h-3 w-3"
                    style={{ backgroundColor: StatusColors[status] }}
                ></span>
            </span>
            <div className="text-sm sm2:text-xs">{StatusText[status]}</div>
        </div>
    );
};

export default CircleStatus;