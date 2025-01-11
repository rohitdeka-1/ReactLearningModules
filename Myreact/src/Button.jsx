
function clickMe(){
    console.log("Clicked");
}

const Button = () => {
  return (
    <div>
        <button onClick={clickMe} >Click me!</button>
    </div>
  )
}

export default Button
