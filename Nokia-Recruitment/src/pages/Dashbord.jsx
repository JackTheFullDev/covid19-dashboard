import { MyChart } from '../Components/MyChart'
import { MyTable } from '../Components/MyTable'
import { GlobalData } from '../Components/GlobalData'
import { useState,useEffect } from 'react'
import '../style/Home.css'

export const  Dashbord = () =>
{
    const [apidata,setApiData]= useState()
    useEffect(()=>
    {
      const url='https://api.covid19api.com/summary';
      fetch(url).then(res=>res.json()).then(data=>setApiData(data));
     
    },[])
   
    const {Global,Countries}=apidata || {};
   

    return(
        <section className='home-section'>
            
            <div className='home-component'>
            <GlobalData Global={Global}/> 
            </div>
            <div className='home-component'>  
              <MyChart/>
            </div>
            <div className='home-component'> 
            <MyTable Countries={Countries}/>
            </div> 

        </section>
    )
}