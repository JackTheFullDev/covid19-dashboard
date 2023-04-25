import { Chart } from "primereact/chart";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { LoadData } from "./LoadData";

export const MyChart = () => {
  //api chart context
  const { chartData, chartOptions } = useContext(ApiContext);

  return (
    <section className="mycharts-section">
      {chartData ? (
        <Chart
          className="charts-component"
          type="bar"
          data={chartData}
          options={chartOptions}
        />
      ) : (
        <LoadData />
      )}
    </section>
  );
};
