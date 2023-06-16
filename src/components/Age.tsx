import * as React from "react";
import { Tooltip } from "react-tippy";

import { useYearsAgo } from "../hooks/useTimeAgo";

interface AgeProps {
    date: Date;
};

const Age = ({ date }: AgeProps) => {
    const age = useYearsAgo(date);

    return (
        <Tooltip title={age.toFixed(8)} position={"top"} duration={250} animation={"perspective"}>
            <span className="text-gray-400 underline" aria-label={age.toString()}>
                {Math.floor(age)}
            </span>
        </Tooltip>
    );
};

export default Age;
