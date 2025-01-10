import "./MsgBox.css";

function MsgBox({ userName = "Default User", textColor = "black" }) {
  return (
    <div className="MsgBox">
      <h1>Name: {userName}</h1>
      <h2 style={{ color: textColor }}>Color: {textColor}</h2>
    </div>
  );
}

export default MsgBox;
