import { Link } from "react-router-dom"

export const MyLink =({icon,to})=>
{
    return (
        <Link to={to} className="home-component">
       {icon}
        <div className="table-page-content">Table</div>
      </Link>
    )
}