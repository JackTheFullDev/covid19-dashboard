import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; 
//filter
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { useState } from "react";
import '../style/Table.css'

export const MyTable = ({Countries}) => {
  const [filter, setFilter] = useState({});
  const [filters,setFilters]=useState({
    global:{value:null,matchMode:FilterMatchMode.CONTAINS},
   })
  return (
    <section className="table-section">



<InputText
        onInput={(e) =>
          setFilter({
            global: {
              value: e.target.value,
              matchMode: FilterMatchMode.CONTAINS,
            },
          })
        }
        placeholder="input data"
       
      />
     <DataTable
      className="data-table"
        value={Countries}
        sortMode="multiple"
        filters={filter}
        paginator
        rows={10}
       // filterDisplay="row"
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
