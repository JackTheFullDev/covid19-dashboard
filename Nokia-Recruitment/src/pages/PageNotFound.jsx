import { Link } from "react-router-dom"
import '../style/PageNotFound.css'
export const PageNotFound =() =>
{
    return(
        <div>
           <h1> Page not found!</h1>
           <Link to="/">back to Home</Link>
            
            </div>
    )
}
