import { Link } from "react-router-dom";

export const MyLink = ({ icon, to, nameOfClass,content }) => {
  console.log(nameOfClass)
  return (
    <Link to={to} className="home-component">
      {icon}
      <div className={nameOfClass}>{content}</div>
    </Link>
  );
};
