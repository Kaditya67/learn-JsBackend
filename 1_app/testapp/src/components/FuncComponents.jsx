import React, { useEffect } from 'react'

function FuncComponents({name,setCount}) {
    // useEffect(() => {
    //     console.log("FuncComponents mounted");
    
    //     // Mimic componentWillUnmount
    //     return () => {
    //       console.log("FuncComponents will unmount");
    //     };
    //   }, []);
    
    //   // Mimic componentDidUpdate for `name` prop
    //   useEffect(() => {
    //     console.log("FuncComponents updated: name changed");
    //   }, [name]);

  return (
    <div>
      <h1>Hi {name},from Functional Components !</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  )
}

export default FuncComponents
