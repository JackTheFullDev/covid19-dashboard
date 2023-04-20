import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend,CartesianGrid } from 'recharts';


export const MyChart= ({Countries}) =>
{
  
    return(
     
      <BarChart  height={1000}  width={500} data={Countries} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="Country" type="category" />
        <XAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="TotalConfirmed" fill="#8884d8" />
        <Bar dataKey="TotalDeaths" fill="#82ca9d" />
      </BarChart>
      
          
    )
}