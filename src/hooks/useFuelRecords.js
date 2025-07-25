import { useState, useEffect } from "react";

export function useFuelRecords(key = "fuelRecords") {
    const [records, setRecords] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(records));
    }, [records, key]);

    const addRecord = (rec) => {
        setRecords((prev) => [...prev, rec]);
    };

    const deleteRecord = (timestamp) => {
        setRecords((prev) =>
            prev.filter((rec) => rec.rawTimestamp !== timestamp)
        );
    };

    return { records, addRecord, deleteRecord };
}
