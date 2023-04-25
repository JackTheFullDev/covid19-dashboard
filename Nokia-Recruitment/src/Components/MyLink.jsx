import { Link } from "react-router-dom";

export const MyLink = ({ icon, to, nameOfClass, content }) => {
  return (
    <Link to={to} className="home-component">
      {icon}
      <div className={nameOfClass}>{content}</div>
    </Link>
  );
};
