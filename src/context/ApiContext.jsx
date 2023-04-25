import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  //chart Api
  const [apiChartData, setApiChartData] = useState({});
  const { isLoading: chartIsLoading, data: chartApiData } = useQuery(
    "chart-api",
    () => {
      const url = `https://disease.sh/v3/covid-19/continents`;
      return fetch(url)
        .then((res) => res.json())
        .then((data) => setApiChartData(data));
    }
  );
  //chart js
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

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

  //global & table Api
  const [apiData, setApiData] = useState();
  const { isLoading: globalIsLoading, data: globalData } = useQuery(
    "global-api",
    () => {
      const url = "https://api.covid19api.com/summary";
      return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);

          return data; // return the fetched data
        });
    }
  );

  const value = {
    apiChartData,
    apiData,
    chartIsLoading,
    globalIsLoading,
    globalData,
    chartData,
    chartOptions,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
