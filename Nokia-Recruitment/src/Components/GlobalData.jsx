import "../style/Components.css";
import { GiDeathSkull } from "react-icons/gi";
import { GiDeathNote } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { FaExclamation } from "react-icons/fa";
import { LoadData } from "./LoadData";
import { GlobalDateComponent } from "./GlobalDateComponent ";

export const GlobalData = ({ global }) => {
  return (
    <div className="global-data">
      {global ? (
        <>
          <div className="text-content">
            <h2 id="global-date-date">{global.Date.slice(0, 10)}</h2>
            <h3>Date</h3>
          </div>
          <GlobalDateComponent
            icon={<FaExclamation />}
            id={"global-new-confirmed"}
            data={global.NewConfirmed}
            text={"New Confirmed"}
          />
          <GlobalDateComponent
            icon={<GiDeathSkull />}
            id={"global-new-deaths"}
            data={global.NewConfirmed}
            text={"New Deaths"}
          />
          <GlobalDateComponent
            icon={<AiOutlineCheck />}
            id={"global-total-confirmed"}
            data={global.NewConfirmed}
            text={"Total Confirmed"}
          />
          <GlobalDateComponent
            icon={<GiDeathNote />}
            id={"global-total-deaths"}
            data={global.NewConfirmed}
            text={"Total Deaths"}
          />
        </>
      ) : (
        <LoadData />
      )}
    </div>
  );
};
