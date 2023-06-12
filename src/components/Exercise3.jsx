import { useRef } from "react";
import "./Exercise3.css";

const ExaChars = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

const Exercise3 = () => {
  const divBg = useRef(null);

  const changeBgColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 16);
      color += ExaChars[index];
    }
    //getComputedStyle para obtener el valor de propiedades de css extarnas, solo lectura
    //const computedStyle = getComputedStyle(divBg.current);
    //console.log(computedStyle.backgroundColor);
    divBg.current.style.backgroundColor = `${color}`;
  };

  return (
    <div ref={divBg} className="change-bg-color">
      <h1>Exercise3</h1>
      <button onClick={changeBgColor}>Change Background color</button>
    </div>
  );
};

export default Exercise3;
