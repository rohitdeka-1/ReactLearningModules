

const Card = (props) => {
  return (
    <div className="flex flex-col bg-blue-500">

      <div>
        <h1>{props.name}</h1>
      </div>

      <div>
        <p>{props.number}</p>
        <p>{props.place}</p>
        <p>{props.reg}</p>
      </div>

    </div>
  )
}   

export default Card
