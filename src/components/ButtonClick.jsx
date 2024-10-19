import React from "react";

export const ButtonClick = () => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    alert("Clicked");
  }
  return <button>ButtonClick</button>;
};
