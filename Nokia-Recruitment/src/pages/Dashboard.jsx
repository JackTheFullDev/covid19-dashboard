import { MyChart } from "../Components/MyChart";
import { MyTable } from "../Components/MyTable";
import { GlobalData } from "../Components/GlobalData";
import {  useContext } from "react";
import { ApiContext } from "../Context/ApiContext";

import "../style/Dashbord.css";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { apiData } = useContext(ApiContext);
  const { Global, Countries } = apiData || {};

  return (
    <section className="dashboard">
      <div className="dashboard-section">
      <div className="dashboard-component">
        <GlobalData Global={Global} />
      </div>
      <div className="dashboard-component">
        <MyChart />
      </div>
      <div className="dashboard-component">
        <MyTable Countries={Countries} />
      </div>
      </div>
      <Link to="/">Back to Home</Link>
    </section>
  );
};
