import React from "react";
import { ParentComponent } from "./ExpensiveComponent";

export const Home = () => {
  return (
    <div>
      Home
      <ParentComponent />
    </div>
  );
};
