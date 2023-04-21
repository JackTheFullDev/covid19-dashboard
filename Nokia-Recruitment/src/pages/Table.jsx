import { MyTable } from "../Components/MyTable"
import{ApiContext} from "../Context/ApiContext"
import { useContext } from "react"
export const Table =()=>
{
    const {apiData} =useContext (ApiContext)
    const {Countries}=apiData || {};
    return(
       <MyTable Countries={Countries}/>
    )
}