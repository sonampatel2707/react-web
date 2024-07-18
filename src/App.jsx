import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Containers from "./Components/Containers/Containers";

const App = () => {
  const [bgColor, setbgColor] = useState("#232D3f");

  const [color, setColor] = useState("white");

  const [toggle, setToggle] = useState(true);

  const toggleButton = () => {
    setToggle(!toggle);
    if (toggle) {
      setbgColor("rgb(255,255,255)");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {
      setbgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  };

  return (
    <div>
      <Navbar
        bgColor={bgColor}
        color={color}
        toggleButton={toggleButton}
        toggle={toggle}
      />

      <Containers
       bgColor={bgColor}
        color={color}
       />
    </div>
  );
};

export default App;
