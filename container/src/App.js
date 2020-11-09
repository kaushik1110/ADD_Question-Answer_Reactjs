import React from "react";
import './App.css';
import AddData from './Data/AddData';
import useA from './Data/useCustomHook';
function App() {
  const data1 = useA();
  const data =useA();
  return (
    // <>
    //   <h1>Count up : {data.count}{data1.count}</h1>
    //   <button type="button" onClick={data.handleIncrement}>Increment</button>
    //   <button type="button" onClick={data1.handleIncrement}>Option</button>
    // </>
    <div className="App">
     <AddData/>
    </div>
  );
}

export default App;
