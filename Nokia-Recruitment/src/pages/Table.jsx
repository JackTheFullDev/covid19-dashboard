import { Link } from "react-router-dom"
import { MyTable } from "../Components/MyTable"
import{ApiContext} from "../Context/ApiContext"
import { useContext } from "react"
import '../style/Table.css'

export const Table =()=>
{
    const {apiData} =useContext (ApiContext)
    const {Countries}=apiData || {};
    return(
      <section className="table">
        <MyTable Countries={Countries}/>
       <Link to="/">Back to Home</Link>
      </section>
    )
}