import React from "react";
import CalculatorForm from "./components/CalculatorForm";
import RecordsList from "./components/RecordsList";
import ExportButton from "./components/ExportButton";
import { useFuelRecords } from "./hooks/useFuelRecords";

function App() {
    const { records, addRecord, deleteRecord } = useFuelRecords();

    const handleDeleteRecord = (timestamp) => {
        deleteRecord(timestamp);
    };

    return (
        <div className="big-container" style={{ padding: "1rem" }}>
            <h1>Fuel Cost Logger</h1>
            <CalculatorForm onSubmit={addRecord} />
            <ExportButton records={records} />
            <RecordsList records={records} onDelete={handleDeleteRecord} />
        </div>
    );
}

export default App;
