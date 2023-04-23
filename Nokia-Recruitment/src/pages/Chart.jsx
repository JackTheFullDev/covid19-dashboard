import { MyChart } from "../Components/MyChart";
import { Link } from "react-router-dom";
import "../style/Chart.css";

export const Chart = () => {
  return (
    <section className="chart-page">
      <MyChart></MyChart>
      <Link to="/">back to home</Link>
    </section>
  );
};
