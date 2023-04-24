import { MyChart } from "../components/MyChart";
import { MyTable } from "../components/MyTable";
import { GlobalData } from "../components/GlobalData";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

import "../style/Dashbord.css";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
  const { apiData } = useContext(ApiContext);
  const { Global, Countries } = apiData || {};

  return (
    <section className="dashboard">
      <div className="dashboard-section">
        <div className="dashboard-component">
          <GlobalData global={Global} />
        </div>
        <div className="dashboard-component">
          <MyChart/>
        </div>
        <div className="dashboard-component">
          <MyTable Countries={Countries} />
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </section>
  );
};
