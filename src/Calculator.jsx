import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [operator, setOperator] = useState("");

  const handleClear = () => {
    setNumber("");
    setResult("");
    setPrevNumber("");
    setOperator("");
  };

  const handleAdd = () => {
    setOperator("+");
    if (prevNumber && result) {
      setPrevNumber(handleNewResult);
    } else if (prevNumber && !result) {
      setPrevNumber(handleResult);
    } else {
      setPrevNumber(number);
      setNumber("");
    }
  };

  const handleSubtract = () => {
    setOperator("-");
    if (prevNumber && result) {
      setPrevNumber(handleNewResult);
    } else if (prevNumber && !result) {
      setPrevNumber(handleResult);
    } else {
      setPrevNumber(number);
      setNumber("");
    }
  };

  const handleMultiply = () => {
    setOperator("*");
    if (prevNumber && result) {
      setPrevNumber(handleNewResult);
    } else if (prevNumber && !result) {
      setPrevNumber(handleResult);
    } else {
      setPrevNumber(number);
      setNumber("");
    }
  };

  const handleDivide = () => {
    setOperator("/");
    if (prevNumber && result) {
      setPrevNumber(handleNewResult);
    } else if (prevNumber && !result) {
      setPrevNumber(handleResult);
    } else {
      setPrevNumber(number);
      setNumber("");
    }
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

  const handleNewResult = () => {
    if (operator === "+") {
      setResult(result + parseInt(number));
    } else if (operator === "-") {
      setResult(result - parseInt(number));
    } else if (operator === "*") {
      setResult(result * parseInt(number));
    } else if (operator === "/") {
      setResult(result / parseInt(number));
    }
    setNumber("");
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        {!number ? (!result ? prevNumber : result) : number}
      </div>
      <div className="keypad">
        <button
          className="button"
          onClick={() => {
            setNumber(number + "1");
          }}
        >
          1
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "2");
          }}
        >
          2
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "3");
          }}
        >
          3
        </button>
        <button className="op-button" onClick={handleAdd}>
          +
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "4");
          }}
        >
          4
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "5");
          }}
        >
          5
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "6");
          }}
        >
          6
        </button>
        <button className="op-button" onClick={handleSubtract}>
          -
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "7");
          }}
        >
          7
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "8");
          }}
        >
          8
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "9");
          }}
        >
          9
        </button>
        <button className="op-button" onClick={handleMultiply}>
          x
        </button>
        <button
          className="op-button"
          onClick={() => {
            handleClear();
          }}
        >
          C
        </button>
        <button
          className="button"
          onClick={() => {
            setNumber(number + "0");
          }}
        >
          0
        </button>
        <button className="op-button" onClick={handleResult}>
          =
        </button>
        <button className="op-button" onClick={handleDivide}>
          /
        </button>
      </div>
    </div>
  );
}
