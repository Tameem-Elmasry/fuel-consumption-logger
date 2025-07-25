// @ Imports
import React, { useState } from "react";

export default function CalculatorForm({ onSubmit }) {
    // @ stats
    const [cons, setCons] = useState("");
    const [dist, setDist] = useState("");
    const [price, setPrice] = useState("");

    // @ functions
    const handleSubmit = (e) => {
        e.preventDefault();
        const c = parseFloat(cons),
            d = parseFloat(dist),
            p = parseFloat(price);
        if (isNaN(c) || isNaN(d) || isNaN(p)) return alert("Invalid input");
        const liters = +((c / 100) * d).toFixed(2);
        const cost = +(liters * p).toFixed(2);
        onSubmit({
            rawTimestamp: new Date().getTime(),
            Consumption: c,
            Distance: d,
            Price: p,
            Liters: liters,
            Cost: cost,
        });
        setCons("");
        setDist("");
        setPrice("");
    };

    // @ return
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={cons}
                onChange={(e) => setCons(e.target.value)}
                step="0.1"
                placeholder="L/100 km"
                required
            />
            <input
                type="number"
                value={dist}
                onChange={(e) => setDist(e.target.value)}
                step="1"
                placeholder="Distance (km)"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                step="0.01"
                placeholder="Price per L"
                required
            />
            <button type="submit">Add & Calculate</button>
        </form>
    );
}
