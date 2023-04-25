export const GlobalDateComponent = ({icon,id,data,text}) =>
{
    return(
        <div className="text-content">
        <h2 id={id}>
            {icon}{data}
        </h2>
        <h3>{text}</h3>
      </div>
    )
}