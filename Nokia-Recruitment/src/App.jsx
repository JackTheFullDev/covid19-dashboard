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

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
  const [count, setCount] = useState(0)
 const [apidata,setApiData]= useState()
 const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

  useEffect(()=>
  {
    fetch("https://api.covid19api.com/summary").then(res=>res.json()).then(data=>setApiData(data));
   
  },[])

    
  const {Global,Countries,Date}=apidata || {};
 
 
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
       <BarChart width={1000} height={400} data={Countries}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Country" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="TotalConfirmed" fill="#8884d8" />
      <Bar dataKey="TotalDeaths" fill="#82ca9d" />
    </BarChart>
    
  {console.log(data)}
  <DataTable value={data} >
    <Column field="name" header="NAME" sortable></Column>
    <Column field="uv" header="UV"></Column>
  </DataTable>
     
    {/* <div className="apidata-container">
    {apidata && apidata.Countries.map((country) => (
  <div key={country.CountryCode}>
    <h3>{country.Country}</h3>
    <p>New Confirmed: {country.NewConfirmed}</p>
    <p>Total Confirmed: {country.TotalConfirmed}</p>
    <p>New Deaths: {country.NewDeaths}</p>
    <p>Total Deaths: {country.TotalDeaths}</p>
    <p>New Recovered: {country.NewRecovered}</p>
    <p>Total Recovered: {country.TotalRecovered}</p>
  </div>
))}

    </div> */}
    </div>
  )
}

export default App
