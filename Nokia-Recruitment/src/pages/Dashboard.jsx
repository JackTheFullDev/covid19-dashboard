import { MyChart } from '../Components/MyChart'
import { MyTable } from '../Components/MyTable'
import { GlobalData } from '../Components/GlobalData'
import { useState,useEffect } from 'react'
import '../style/Dashbord.css'

export const  Dashboard = () =>
{
    const [apidata,setApiData]= useState()
    useEffect(()=>
    {
      const url='https://api.covid19api.com/summary';
     // fetch(url).then(res=>res.json()).then(data=>setApiData(data));
     
    },[])
   
    const {Global,Countries}=apidata || {};
   

    return(
        <section className='dashboard-section'>
            
            <div className='dashboard-component'>
            <GlobalData Global={Global}/> 
            </div>
            <div className='dashboard-component'>  
              <MyChart/>
            </div>
            <div className='dashboard-component'> 
            <MyTable Countries={Countries}/>
            </div> 

        </section>
    )
}