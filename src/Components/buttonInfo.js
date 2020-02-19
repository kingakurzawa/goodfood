import React, { useState } from "react";

const ButtonInfo = () => {
  const [displayFormat, setDisplay] = useState("none");

  const changeDisplay = () => {
    if (displayFormat === "none") {
      return setDisplay("block");
    } else {
      return setDisplay("none");
    }
  };

  return (
    <>
      <div className="boxInfo">
        <p style={{ display: displayFormat }}>
          this page can help you find delicious dishes by ingredients which
          you have in your kitchen! Just enter the name of the ingredients on
          the search bar.
        </p>
        <button
          className="buttonInfo"
          onClick={changeDisplay}
          aria-label="click"
        >
          click!
        </button>
      </div>
    </>
  );
};

export default ButtonInfo;
