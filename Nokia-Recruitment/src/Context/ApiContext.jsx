import { createContext, useState,useEffect } from "react";

export const ApiContext=createContext();

export const ApiContextProvider=({children})=>
{
    //chart Api
    const [apiChartData,setApiChartData]=useState({});
    useEffect(()=>
    {
        const url=`https://disease.sh/v3/covid-19/continents`
       // fetch(url).then(res=>res.json()).then(data=>setApiChartData(data));
    },[])

    const value={apiChartData}

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
}