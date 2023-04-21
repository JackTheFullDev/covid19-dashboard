import { MyChart } from '../Components/MyChart'
import { MyTable } from '../Components/MyTable'
import { GlobalData } from '../Components/GlobalData'
import { useState,useEffect } from 'react'
import {MdTableChart} from 'react-icons/md'
import '../style/Home.css'

export const  Home = () =>
{
    const [apidata,setApiData]= useState()
    useEffect(()=>
    {
      const url='https://api.covid19api.com/summary';
     // fetch(url).then(res=>res.json()).then(data=>setApiData(data));
     
    },[apidata])
   
    const {Global,Countries,Date}=apidata || {};
   

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