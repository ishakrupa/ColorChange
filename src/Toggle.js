import colorNames from "colornames";
const Toggle = ({
  colorvalue,
  setColorvalue,
  setHexValue,
  isDarkText,
  setIsDarkText
}) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          autoFocus
          type="text"
          placeholder="Add ColorName"
          required
          value={colorvalue}
          onChange={(e) => {
            setColorvalue(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
        />
        <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
          {" "}
          Toggle TextColor
        </button>
      </form>
    </>
  );
};
export default Toggle;
