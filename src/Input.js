import React from "react";

const Input = ({ colorvalue, hexValue }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorvalue,
        color: colorvalue === "black" ? "#FFF" : "#000"
      }}
      debug
    >
      <p> {colorvalue ? colorvalue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};
Input.defaultProps = {
  colorvalue: "Empty Color Value"
};

export default Input;
