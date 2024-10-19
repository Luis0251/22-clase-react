import React from "react";

export const ComponenteNoControlado = () => {
  const inputRef = React.useRef();
  const onClickButton = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClickButton}>Click</button>
    </div>
  );
};
