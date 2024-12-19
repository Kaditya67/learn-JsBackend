import React, { useContext } from "react";
import ClassComponents from "./components/ClassComponents";
import FuncComponents from "./components/FuncComponents";
import Hooks from "./components/Hooks";
import { MyContext } from "./main";

function App() {
  const { count, setCount } = useContext(MyContext); // Access context in the App component

  return (
    <>
      {/* Class-based component */}
      <ClassComponents name="Mighty class" setCount={setCount} count={count} />

      {/* Functional component */}
      <FuncComponents name="Modern Function" setCount={setCount} />

      {/* Hooks component that also needs the current count */}
      <Hooks count={count} />
    </>
  );
}

export default App;
