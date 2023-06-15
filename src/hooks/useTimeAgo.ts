import { useState, useEffect } from "react";

const getYearsAgo = (date: Date) => {
    let timestamp = new Date().getTime() - date.getTime();
    timestamp /= 1000 * 60 * 60 * 24 * 365.25;
    return timestamp;
};

export const useYearsAgo = (date: Date) => {
    const [years, setYears] = useState(getYearsAgo(date));

    useEffect(() => {
        let yearTimer: NodeJS.Timer | number = setInterval(() => setYears(getYearsAgo(date)), 1000);
        return () => {
            clearInterval(yearTimer);
            yearTimer = 0;
        };
    }, [date]);

    return years;
};