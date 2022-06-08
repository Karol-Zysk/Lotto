import React, { useState } from "react";
//@ts-ignore
import Random from "random-number-arrays";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const arrayOptions = {
    min: 1,
    max: 49,
    type: "array",
    arraySize: 15,
    unique: true,
  };

  //Creating Array of Random Unique Numbers
  const createArrayHandler = () => {
    const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const Arr: number[] = Random(arrayOptions);
    const output = myArr.filter(function (obj) {
      return Arr.indexOf(obj) !== -1;
    });
    if (output) {
      console.log(output);
      console.log(Arr);

      setCounter(counter + 1);
    }
  };

  return (
    <div className="App">
      <button onClick={createArrayHandler}>Create Arr</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default App;
