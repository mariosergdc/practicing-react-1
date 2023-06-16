import { useEffect, useState } from "react";

const RomanosValues = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const Exercise2 = () => {
  const [decimal, setDecimal] = useState(0);

  const romanoadecimal = (romano = "") => {
    let acumulator = 0;
    for (let i = 0; i < romano.length - 1; i++) {
      if (RomanosValues[romano[i]] < RomanosValues[romano[i + 1]]) {
        acumulator -= RomanosValues[romano[i]];
        console.log("restar", RomanosValues[romano[i]]);
        console.log(acumulator);
      } else {
        acumulator += RomanosValues[romano[i]];
        console.log("sumar", RomanosValues[romano[i]]);
        console.log(acumulator);
      }
    }
    acumulator += RomanosValues[romano[romano.length - 1]];
    console.log("sumar ultimo", RomanosValues[romano[romano.length - 1]]);
    console.log(acumulator);
    setDecimal(acumulator);
    return acumulator;
  };

  const handleChange = (e) => {
    romanoadecimal(e.target.value);
  };

  useEffect(() => {
    romanoadecimal("XXIV");
  }, []);

  return (
    <>
      <h1>Exercise2</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Número Romano"
        />
      </form>
      <h2>Decimal</h2>
      <div>{decimal}</div>
    </>
  );
};

export default Exercise2;
