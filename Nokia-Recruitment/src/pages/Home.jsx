import { MyChart } from '../Components/MyChart'
import { MyTable } from '../Components/MyTable'
import { GlobalData } from '../Components/GlobalData'
import { useState,useEffect } from 'react'
import '../style/Home.css'

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
        <section className='home-section'>
            
            <div className='home-component'>
            <GlobalData Global={Global}/>
            </div>
            <div className='home-component'>  <MyChart Countries={Countries}></MyChart>  </div>
            <div className='home-component'> <MyTable Countries={Countries}/></div> 
            
            {/* <MyChart Countries={Countries}></MyChart> //here add scroll
            <MyTable Countries={Countries}></MyTable> */}
        </section>
    )
}