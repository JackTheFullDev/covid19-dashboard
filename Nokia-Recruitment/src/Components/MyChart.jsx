import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend,CartesianGrid } from 'recharts';
import { Chart } from 'primereact/chart';
import { useState,useEffect } from 'react';

export const MyChart= ({Countries}) =>
{
  const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    
    useEffect(() => {
       const allCountries =Countries?.map(country => country.Country);
       const TotalDeaths =Countries?.map(country => country.TotalDeaths);
       const TotalConfirmed =Countries?.map(country => country.TotalConfirmed);
       const newDeaths =Countries?.map(country => country.NewDeaths);
       
      const data = {
          labels: allCountries,
          datasets: [
              {
                  label: 'deads',
                  backgroundColor: "blue",
                  borderColor: "blue",
                  data: TotalConfirmed
              },
             
          ]
      };
      const options = {
          indexAxis: 'y',
          aspectRatio: 0.09,
          plugins: {
              legend: {
                  labels: {
                      fontColor: "white"
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: "white",
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      display: false,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: "white"
                  },
                  grid: {
                      color: "white",
                      drawBorder: false
                  }
              }
          }
      };

      setChartData(data)
      setChartOptions(options);
  }, [Countries]);
    return(
     
      // <ResponsiveContainer width="100%" height={300}>
      //   <BarChart  height={1000}  width={500} data={Countries} layout="vertical">
      //   <CartesianGrid strokeDasharray="3 3" />
      //   <YAxis dataKey="Country" type="category" />
      //   <XAxis />
      //   <Tooltip />
      //   <Legend />
      //   <Bar dataKey="TotalConfirmed" fill="#8884d8" />
      //   <Bar dataKey="TotalDeaths" fill="#82ca9d" />
      // </BarChart>
      // </ResponsiveContainer>
      
          <section className='mycharts-section'>
             <Chart className='charts-component' type="bar" data={chartData} options={chartOptions} />
          </section>
    )
}