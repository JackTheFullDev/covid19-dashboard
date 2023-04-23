import { Link } from "react-router-dom";
import { MyTable } from "../components/MyTable";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
import "../style/Table.css";

export const TablePage = () => {
  const { apiData } = useContext(ApiContext);
  const { Countries } = apiData || {};
  return (
    <section className="table">
      <MyTable Countries={Countries} />
      <Link to="/">Back to Home</Link>
    </section>
  );
};
