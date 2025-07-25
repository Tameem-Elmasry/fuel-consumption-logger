import React from 'react';
import { utils, writeFileXLSX } from 'xlsx';

export default function ExportButton({ records }) {
  const handleExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(records);
    utils.book_append_sheet(wb, ws, 'FuelLog');
    writeFileXLSX(wb, 'fuel_log.xlsx');
  };

  return (
    <button  className={`export_btn`} onClick={handleExport} disabled={!records.length}>
      Download Excel
    </button>
  );
}
