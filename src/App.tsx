import React, { useState } from "react";
//@ts-ignore
import Random from "random-number-arrays";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [countThree, setCountThree] = useState<number>(0);
  const [countFour, setCountFour] = useState<number>(0);
  const [countFive, setCountFive] = useState<number>(0);
  const [countSix, setCountSix] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //setting array
  const arrayOptions = {
    min: 1,
    max: 49,
    type: "multi-array",
    numberOfArrays: 1000000,
    arraySize: 6,
    unique: true,
  };

  //Creating Array of Random Unique Numbers
  const randomArray: number[][] = Random(arrayOptions);
  const [output, setOutput] = useState<number[][]>(randomArray);

  //user Array to compare with
  const myArr = [1, 2, 3, 4, 5, 6];
  let valueArr = [];
  let NUMBER_OF_THREES = 0;
  let NUMBER_OF_FOURS = 0;
  let NUMBER_OF_FIVES = 0;
  let NUMBER_OF_SIXES = 0;

  //setting wininning results
  const setWinningResults = () => {
    setCountThree(NUMBER_OF_THREES);
    setCountFour(NUMBER_OF_FOURS);
    setCountFive(NUMBER_OF_FIVES);
    setCountSix(NUMBER_OF_SIXES);
  };

  const createRandomArray = () => {
    setIsLoading(true);
    setOutput([...output, ...randomArray]);
    valueArr = output.map((random) =>
      random.filter(function (obj) {
        return myArr.indexOf(obj) !== -1;
      })
    );
    valueArr.map((value) => {
      if (value.length === 3) {
        NUMBER_OF_THREES++;
      } else if (value.length === 4) {
        NUMBER_OF_FOURS++;
      } else if (value.length === 5) {
        NUMBER_OF_FIVES++;
        console.log("There is " + NUMBER_OF_FIVES + " fives");
      } else if (value.length === 6) {
        NUMBER_OF_SIXES++;
        console.log("There is " + NUMBER_OF_SIXES + " sixes");
      }
    });

    setCounter(valueArr.length);
    setWinningResults();
    setIsLoading(false);
  };

  const createArrayAutomaticly = () => {
    createRandomArray();
  };

  const manualCreateArray = () => {
    createRandomArray();
  };

  return (
    <div className="App">
      <button onClick={manualCreateArray}>Create Arr</button>
      <button onClick={createArrayAutomaticly}>Creating Automat</button>
      <h1>Liczba losowań: {counter}</h1>
      <h1>trójki: {countThree}</h1>
      <h1>czwórki {countFour}</h1>
      <h1>piątki {countFive}</h1>
      <h1>szóstki {countSix}</h1>
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}

export default App;
