import "./buttons.css";

const Buttons = (props) => {
  return (
    <>
      <button onClick={props.add}>+</button>
      <input
        type="text"
        value={props.inputValue}
        id={props.inputId}
        onInput={props.handleClick}
        name={props.inputName}
        className="textBox"
      ></input>
      <button onClick={props.subtract}>-</button>
    </>
  );
};

export default Buttons;
