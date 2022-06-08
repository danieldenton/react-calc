export default function Buttons({ button, handleClear, handleResult }) {
  return (
    <button
      className={button.class}
      //   onClick={() => {
      //     button.func;
      //   }}
    >
      {button.value}
    </button>
  );
}
