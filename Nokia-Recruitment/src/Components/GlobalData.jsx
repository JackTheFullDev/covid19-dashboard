import "../style/Components.css";
import { GiDeathSkull } from "react-icons/gi";
import { GiDeathNote } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { FaExclamation } from "react-icons/fa";

export const GlobalData = ({ Global }) => {
  return (
    <div className="global-data">
      <div className="text-content">
        <h2 id="global-date-date">{Global && Global.Date.slice(0, 10)}</h2>
        <h3>Date</h3>
      </div>
      <div className="text-content">
        <h2 id="global-new-confirmed">
          <FaExclamation /> {Global && Global.NewConfirmed}
        </h2>
        <h3>New Confirmed</h3>
      </div>
      <div className="text-content">
        <h2 id="global-new-deaths">
          <GiDeathSkull /> {Global && Global.NewDeaths}
        </h2>
        <h3>New Deaths</h3>
      </div>
      <div className="text-content">
        <h2 id="global-total-confirmed">
          <AiOutlineCheck /> {Global && Global.TotalConfirmed}
        </h2>
        <h3>Total Confirmed</h3>
      </div>
      <div className="text-content">
        <h2 id="global-total-deaths">
          <GiDeathNote /> {Global && Global.TotalDeaths}
        </h2>
        <h3>Total Deaths</h3>
      </div>
    </div>
  );
};
