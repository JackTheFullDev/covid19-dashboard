import { Chart } from "primereact/chart";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export const MyChart = () => {
  //api chart context
  const { apiChartData } = useContext(ApiContext);
 

  //chart js
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

 console.log(apiChartData)

  
  useEffect(() => {
    if (apiChartData.length > 0) {
      const continents =
        apiChartData && apiChartData.map((data) => data.continent);
      const population =
        apiChartData && apiChartData.map((data) => data.population);
      const tests = apiChartData && apiChartData.map((data) => data.tests);

      const data = {
        labels: [
          "North America",
          "Asia",
          "Europe",
          "South America",
          "Australia & Ocenia",
          "Africa",
        ],
        datasets: [
          {
            label: "Population",
            backgroundColor: "#004E98",
            borderColor: "blue",
            data: population,
          },
          {
            label: "Tests",
            backgroundColor: "#F0F600",
            borderColor: "blue",
            data: tests,
          },
        ],
      };
      const options = {
        indexAxis: "y",
        maintainAspectRatio: false,
        aspectRatio: 0.4,
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "white",
              font: {
                weight: 500,
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: "white",
            },
            grid: {
              color: "white",
              drawBorder: false,
            },
          },
        },
      };
      setChartData(data);
      setChartOptions(options);
    }
  }, [apiChartData]);

  return (
    <section className="mycharts-section">
      <Chart
        className="charts-component"
        type="bar"
        data={chartData}
        options={chartOptions}
      />
    </section>
  );
};
