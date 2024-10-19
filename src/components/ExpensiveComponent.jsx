import React from "react";

const ExpensiveComponent = React.memo(function ({ data }) {
  console.log("Rendering ExpensiveComponent");
  return <div>{data}</div>;
});

export const ParentComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent data="this is expensive render" />
    </div>
  );
};
