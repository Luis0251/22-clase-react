import React from "react";

export const ComponenteControlado = () => {
  const [value, setValue] = React.useState(""); // iniciando con un string vacio
  const onChange = (e) => {
    setValue(console.log(e.target.value)); // actualizar el valor del estado con el valor actual del input
  };

  return (
    <div>
      <h1>My input controlado</h1>
      <input value={value} onChange={onChange} />
    </div>
  );
};
