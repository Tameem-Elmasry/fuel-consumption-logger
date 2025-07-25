import React from "react";

function formatDisplay(ts) {
  const d = new Date(ts);
  const datePart = d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });
  const weekday = d.toLocaleDateString('en-GB', { weekday: 'short' });
  return `${datePart} ${weekday.toLowerCase()}`;
}

export default function RecordsList({ records }) {
  if (!records.length) return <p>No records yet.</p>;

  const sorted = [...records].sort((a, b) => b.rawTimestamp - a.rawTimestamp);
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          {/* <th>Consumption</th> */}
          {/* <th>Distance</th> */}
          {/* <th>Liters</th> */}
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((rec, i) => (
          <tr key={i}>
            <td>{formatDisplay(rec.rawTimestamp)}</td>
            {/* <td>{rec.Consumption}</td> */}
            {/* <td>{rec.Distance}</td> */}
            {/* <td>{rec.Liters}</td> */}
            <td>{rec.Cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
