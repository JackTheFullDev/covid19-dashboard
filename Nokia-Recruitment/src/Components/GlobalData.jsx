import "../style/Components.css";
import { GiDeathSkull } from "react-icons/gi";
import { GiDeathNote } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { FaExclamation } from "react-icons/fa";
import { LoadData } from "./LoadData";


export const GlobalData = ({ global }) => {
  return (
    <div className="global-data">
      {global ? (
        <> 
          <div className="text-content">
            <h2 id="global-date-date">{global.Date.slice(0, 10)}</h2>
            <h3>Date</h3>
          </div>
          <div className="text-content">
            <h2 id="global-new-confirmed">
              <FaExclamation /> {global.NewConfirmed}
            </h2>
            <h3>New Confirmed</h3>
          </div>
          <div className="text-content">
            <h2 id="global-new-deaths">
              <GiDeathSkull /> {global.NewDeaths}
            </h2>
            <h3>New Deaths</h3>
          </div>
          <div className="text-content">
            <h2 id="global-total-confirmed">
              <AiOutlineCheck /> {global.TotalConfirmed}
            </h2>
            <h3>Total Confirmed</h3>
          </div>
          <div className="text-content">
            <h2 id="global-total-deaths">
              <GiDeathNote /> {global.TotalDeaths}
            </h2>
            <h3>Total Deaths</h3>
          </div>
        </>
      ) : (
      <LoadData/>
      )}
    </div>
  );
};
