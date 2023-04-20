import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/apiContainer.css'
import {DataTable}  from "primereact/datatable";
import {Column}  from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 
import { MyChart } from './Components/MyChart'
//chart

//filter
import {InputText}  from "primereact/inputtext"
import {FilterMatchMode}  from "primereact/api"



function App() {
 const [apidata,setApiData]= useState()
 
 //filter
 const [filters,setFilters]=useState({
  global:{value:null,matchMode:FilterMatchMode.CONTAINS},
 })

  useEffect(()=>
  {
    fetch("https://api.covid19api.com/summary").then(res=>res.json()).then(data=>setApiData(data));
   
  },[])

    
  const {Global,Countries,Date}=apidata || {};
 
 //filter table

 const [filter,setFilter]  =useState({}
 )

 //end of filterTable
  return (
    <div className="App">
      {/* <div className='global-data'>
        <h1>Global Info for date: {Global.Date}</h1>
        <h2>New Confirmed:{Global.NewConfirmed}</h2>
        <h2>New Deaths:{Global.NewDeaths}</h2>
        <h2>New Recovered:{Global.NewRecovered}</h2>
        <h2>Total Confirmed:{Global.TotalConfirmed}</h2>
        <h2>Total Recovered:{Global.TotalRecovered}</h2>
      </div> */}
      <h1>Enter country</h1>
   
       <MyChart Countries={Countries}></MyChart> 
        
    
      {/* 
       <BarChart width={1000} height={1000} data={Countries} layout='vertical'>
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis dataKey="Country" type="category" />
      <XAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="TotalConfirmed" fill="#8884d8" />
      <Bar dataKey="TotalDeaths" fill="#82ca9d" />
    </BarChart> */}
    
    <InputText onInput={(e)=>
    setFilter({
      global:{value:e.target.value,matchMode:FilterMatchMode.CONTAINS}
    })} placeholder='input data'/>
  
  <DataTable value={Countries} sortMode='multiple' filters={filter}
  paginator
  rows={25}
  filterDisplay="row"
  emptyMessage="No country found."
  
  >
    
    <Column field="Country" header="Country Name" sortable    ></Column>
    <Column field="NewConfirmed" header="TotalConfirmed" sortable></Column>
    <Column field="NewDeaths" header="TotalConfirmed" sortable></Column>
    <Column field="TotalConfirmed" header="TotalConfirmed" sortable></Column>
    <Column field="TotalDeaths" header="TotalConfirmed" sortable></Column>
  </DataTable>
     
   
    </div>
  )
}

export default App
