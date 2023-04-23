import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  //chart Api
  const [apiChartData, setApiChartData] = useState({});
  useEffect(() => {
    const url = `https://disease.sh/v3/covid-19/continents`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiChartData(data));
  }, []);

  //global & table Api
  const [apiData, setApiData] = useState();
  useEffect(() => {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  const value = { apiChartData, apiData };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
