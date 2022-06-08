import { useState } from "react";

export default function Calculator() {
  const [exp, setExp] = useState("");
  const [result, setResult] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="calculator">
      <div className="calculator-display">{!number ? result : number}</div>
      <div className="keypad">
        <button
          className="button"
          onClick={() => {
            setExp(exp + "1");
            setNumber(number + "1");
          }}
        >
          1
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "2");
            setNumber(number + "2");
          }}
        >
          2
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "3");
            setNumber(number + "3");
          }}
        >
          3
        </button>
        <button
          className="op-button"
          onClick={() => {
            setExp(exp + "+");
            setResult(eval(exp));
            setNumber("");
          }}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "4");
            setNumber(number + "4");
          }}
        >
          4
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "5");
            setNumber(number + "5");
          }}
        >
          5
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "6");
            setNumber(number + "6");
          }}
        >
          6
        </button>
        <button
          className="op-button"
          onClick={() => {
            setExp(exp + "-");
            setResult(eval(exp));
            setNumber("");
          }}
        >
          -
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "7");
            setNumber(number + "7");
          }}
        >
          7
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "8");
            setNumber(number + "8");
          }}
        >
          8
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "9");
            setNumber(number + "9");
          }}
        >
          9
        </button>
        <button
          className="op-button"
          onClick={() => {
            setExp(exp + "*");
            setResult(eval(exp));
            setNumber("");
          }}
        >
          x
        </button>
        <button
          className="op-button"
          onClick={() => {
            setExp("");
            setNumber("");
            setResult("");
          }}
        >
          C
        </button>
        <button
          className="button"
          onClick={() => {
            setExp(exp + "0");
            setNumber(number + "0");
          }}
        >
          0
        </button>
        <button
          className="op-button"
          onClick={() => {
            setResult(eval(exp));
            setNumber("");
          }}
        >
          =
        </button>
        <button
          className="op-button"
          onClick={() => {
            setExp(exp + "/");
          }}
        >
          /
        </button>
      </div>
    </div>
  );
}

// const [result, setResult] = useState(0);
// const [number, setExp] = useState(0);
// const [prevNumber, setPrevNumber] = useState("");
// const [operator, setOperator] = useState("");

// const handleClear = () => {
// setExp("");
// setResult("");
// setPrevNumber("");
// setOperator("");
// };

// const handleResult = () => {
//   if (operator === "+") {
//     setResult(parseInt(prevNumber) + parseInt(number));
//   } else if (operator === "-") {
//     setResult(parseInt(prevNumber) - parseInt(number));
//   } else if (operator === "*") {
//     setResult(parseInt(prevNumber) * parseInt(number));
//   } else if (operator === "/") {
//     setResult(parseInt(prevNumber) / parseInt(number));
//   }
//   setExp("");
// };
// console.log(result);

// const setExp = (operator) => {
//   setOperator(operator);
//   if (prevNumber) {
//     setPrevNumber(handleResult);
//   } else {
//     setPrevNumber(parseInt(number));
//     setExp("");
//   }
// };
