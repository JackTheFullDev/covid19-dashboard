
import '../style/Components.css'
export const GlobalData= ({Global}) =>
{
    return(
        <div className='global-data'>
       <h1>Global Info for date: {Global && Global.Date}</h1>
        <h2>New Confirmed:{Global && Global.NewConfirmed}</h2>
        <h2>New Deaths:{ Global && Global.NewDeaths}</h2>
        <h2>New Recovered:{ Global && Global.NewRecovered}</h2>
        <h2>Total Confirmed:{ Global && Global.TotalConfirmed}</h2>
        <h2>Total Recovered:{Global && Global.TotalRecovered}</h2>
      </div> 
    )
}