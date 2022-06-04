import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [number, setNumber] = useState("0");
  const [operator, setOperator] = useState("");
  const [tempNumber, setTempNumber] = useState("0");

  const handleClear = () => {
    setNumber("");
    setResult("");
    setFirstNumber("");
    setOperator("");
    setTempNumber("0");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setFirstNumber(number);
    setOperator("+");
    setNumber("");
    setTempNumber(number);
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    setFirstNumber(number);
    setOperator("-");
    setNumber("");
    setTempNumber(number);
  };

  const handleMultiply = (e) => {
    e.preventDefault();
    setFirstNumber(number);
    setOperator("*");
    setNumber("");
    setTempNumber(number);
  };

  const handleDivide = (e) => {
    e.preventDefault();
    setFirstNumber(number);
    setOperator("/");
    setNumber("");
    setTempNumber(number);
  };

  const handleResult = (e) => {
    e.preventDefault();
    if (operator === "+") {
      setResult(parseInt(firstNumber) + parseInt(number));
    } else if (operator === "-") {
      setResult(parseInt(firstNumber) - parseInt(number));
    } else if (operator === "*") {
      setResult(parseInt(firstNumber) * parseInt(number));
    } else if (operator === "/") {
      setResult(parseInt(firstNumber) / parseInt(number));
    }
    setNumber(parseInt(result));
    console.log(number);
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        {!result ? (!number ? tempNumber : number) : result}
      </div>
      <div className="keypad">
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "1");
          }}
        >
          1
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "2");
          }}
        >
          2
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "3");
          }}
        >
          3
        </button>
        <button className="button" onClick={handleAdd}>
          +
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "4");
          }}
        >
          4
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "5");
          }}
        >
          5
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "6");
          }}
        >
          6
        </button>
        <button className="button" onClick={handleSubtract}>
          -
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "7");
          }}
        >
          7
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "8");
          }}
        >
          8
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "9");
          }}
        >
          9
        </button>
        <button className="button" onClick={handleMultiply}>
          x
        </button>
        <button
          className="button"
          onClick={(e) => {
            handleClear();
          }}
        >
          C
        </button>
        <button
          className="button"
          onClick={(e) => {
            setNumber(number + "0");
          }}
        >
          0
        </button>
        <button className="button" onClick={handleResult}>
          =
        </button>
        <button className="button" onClick={handleDivide}>
          /
        </button>
      </div>
    </div>
  );
}
