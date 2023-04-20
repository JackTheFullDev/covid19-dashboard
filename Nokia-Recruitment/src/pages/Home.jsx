import { MyChart } from '../Components/MyChart'
import { MyTable } from '../Components/MyTable'
import { GlobalData } from '../Components/GlobalData'
import { useState,useEffect } from 'react'

export const  Home = () =>
{
    const [apidata,setApiData]= useState()
    useEffect(()=>
    {
      fetch("https://api.covid19api.com/summary").then(res=>res.json()).then(data=>setApiData(data));
     
    },[])
   
    const {Global,Countries,Date}=apidata || {};
   
    console.log(Global)
    return(
        <section className='home-container'>
        <GlobalData Global={Global}></GlobalData> 
       <MyChart Countries={Countries}></MyChart> 
       <MyTable Countries={Countries}></MyTable> 
        </section>
    )
}