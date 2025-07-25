import React from "react";

function formatDisplay(ts) {
    const d = new Date(ts);
    const datePart = d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
    const weekday = d.toLocaleDateString("en-GB", { weekday: "short" });
    return `${datePart} ${weekday.toLowerCase()}`;
}

export default function RecordsList({ records, onDelete }) {
    if (!records.length) return <p>No records yet.</p>;

    const sorted = [...records].sort((a, b) => b.rawTimestamp - a.rawTimestamp);
    const totalCost = records
        .reduce((sum, rec) => sum + rec.Cost, 0)
        .toFixed(2);

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((rec, i) => (
                    <tr key={i}>
                        <td>{formatDisplay(rec.rawTimestamp)}</td>
                        <td>{rec.Cost}</td>
                        <td>
                            <button onClick={() => onDelete(rec.rawTimestamp)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td>
                        <strong>Total</strong>
                    </td>
                    <td>
                        <strong>{totalCost}</strong>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
