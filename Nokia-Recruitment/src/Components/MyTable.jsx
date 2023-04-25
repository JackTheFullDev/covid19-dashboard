import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
//filter
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { useEffect, useState } from "react";
import "../style/Table.css";
import { TextField } from "@mui/material";

export const MyTable = ({ Countries }) => {
  const [filter, setFilter] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    const filterData = JSON.parse(localStorage.getItem("newFilter"));
    if (filterData) {
      setLocalData(filterData);
      setFilter({
        global: {
          value: filterData,
          matchMode: FilterMatchMode.CONTAINS,
        },
      });
    }
  }, []);

  const [localData, setLocalData] = useState("");
  const handleInputSearch = (e) => {
    const newFilter = e.target.value;
    localStorage.setItem("newFilter", JSON.stringify(newFilter));
    setLocalData(newFilter);
    setFilter({
      global: {
        value: localData,
        matchMode: FilterMatchMode.CONTAINS,
      },
    });

    console.log(newFilter);
  };
  return (
    <section className="table-section">
      <TextField
        id="filter-input"
        label="search..."
        variant="standard"
        onInput={handleInputSearch}
        value={localData}
      />
      {/* material UI */}
      <DataTable
        className="data-table"
        value={Countries}
        sortMode="multiple"
        filters={filter}
        paginator
        rows={10}
        emptyMessage="No country found."
      >
        <Column field="Country" header="Country Name" sortable></Column>
        <Column field="NewConfirmed" header="NewConfirmed" sortable></Column>
        <Column field="NewDeaths" header="NewDeaths" sortable></Column>
        <Column
          field="TotalConfirmed"
          header="TotalConfirmed"
          sortable
        ></Column>
        <Column field="TotalDeaths" header="TotalDeaths" sortable></Column>
      </DataTable>
    </section>
  );
};
