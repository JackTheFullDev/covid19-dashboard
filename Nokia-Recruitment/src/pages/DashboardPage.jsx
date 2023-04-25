import { MyChart } from "../components/MyChart";
import { MyTable } from "../components/MyTable";
import { GlobalData } from "../components/GlobalData";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

import "../style/Dashbord.css";
import { Link } from "react-router-dom";
import { DashboardComponent } from "../components/DashboardComponent";

export const DashboardPage = () => {
  const { apiData } = useContext(ApiContext);
  const { Global, Countries } = apiData || {};

  return (
    <section className="dashboard">
      <div className="dashboard-section">
        <DashboardComponent
          comp={<GlobalData global={Global} />}
        ></DashboardComponent>
        <DashboardComponent comp={<MyChart />}></DashboardComponent>
        <DashboardComponent
          comp={<MyTable Countries={Countries} />}
        ></DashboardComponent>
      </div>

      <Link to="/">Back to Home</Link>
    </section>
  );
};
