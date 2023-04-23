import { MyChart } from "../components/MyChart";
import { Link } from "react-router-dom";
import "../style/Chart.css";

export const ChartPage = () => {
  return (
    <section className="chart-page">
      <MyChart></MyChart>
      <Link to="/">back to home</Link>
    </section>
  );
};
