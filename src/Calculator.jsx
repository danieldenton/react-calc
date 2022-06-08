import { useState } from "react";
import Buttons from "./Buttons";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [operator, setOperator] = useState("");

  const buttons = [
    { value: "1", className: "button", func: setNumber(number + "1") },
    { value: "2", className: "button", func: setNumber(number + "2") },
    { value: "3", className: "button", func: setNumber(number + "3") },
    { value: "+", className: "op-button", func: setOperator("+") },
    { value: "4", className: "button", func: setNumber(number + "4") },
    { value: "5", className: "button", func: setNumber(number + "5") },
    { value: "6", className: "button", func: setNumber(number + "6") },
    { value: "-", className: "op-button", func: setOperator("-") },
    { value: "7", className: "button", func: setNumber(number + "7") },
    { value: "8", className: "button", func: setNumber(number + "8") },
    { value: "9", className: "button", func: setNumber(number + "9") },
    { value: "x", className: "op-button", func: setOperator("*") },
    { value: "C", className: "op-button", func: handleClear },
    { value: "0", className: "button", func: setNumber(number + "0") },
    { value: "=", className: "op-button", func: handleResult },
    { value: "/", className: "op-button", func: setOperator("/") },
  ];

  const handleClear = () => {
    setNumber("");
    setResult("");
    setPrevNumber("");
    setOperator("");
  };

  const handleResult = () => {
    if (operator === "+") {
      setResult(parseInt(prevNumber) + parseInt(number));
    } else if (operator === "-") {
      setResult(parseInt(prevNumber) - parseInt(number));
    } else if (operator === "*") {
      setResult(parseInt(prevNumber) * parseInt(number));
    } else if (operator === "/") {
      setResult(parseInt(prevNumber) / parseInt(number));
    }
    setNumber("");
  };

  const handleOperation = (operator) => {
    setOperator(operator);
    if (prevNumber) {
      setPrevNumber(handleResult);
    } else {
      setPrevNumber(number);
      setNumber("");
    }
  };

  const keys = buttons.map((button) => {
    <Buttons
      button={button}
      handleResult={handleResult}
      handleClear={handleClear}
    />;
  });

  return (
    <div className="calculator">
      <div className="calculator-display">
        {!number ? (!result ? prevNumber : result) : number}
      </div>
      <div className="keypad">{keys}</div>
    </div>
  );
}
