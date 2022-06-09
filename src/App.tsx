import React, { useEffect, useState } from "react";
//@ts-ignore
import Random from "random-number-arrays";
import "./App.css";

type Options = {
  min: number;
  max: number;
  type: string;
  numberOfArrays: number;
  arraySize: number;
  unique: boolean;
};

function App() {
  const [countThree, setCountThree] = useState<number>(0);
  const [countFour, setCountFour] = useState<number>(0);
  const [countFive, setCountFive] = useState<number>(0);
  const [countSix, setCountSix] = useState<number>(0);
  const [arrayOptions, setArrayOptions] = useState<{}>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [howManyDraws, setHowManyDraws] = useState<number>(2);

  useEffect(() => {
    setArrayOptions({
      min: 1,
      max: 49,
      type: "multi-array",
      numberOfArrays: howManyDraws,
      arraySize: 6,
      unique: true,
    });
  }, [howManyDraws]);

  const setDrawsHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setHowManyDraws(value);
    if (value === 10) {
      console.log("pupu");
    }
  };

  //random arrays settings

  const [addArrays, setAddArrays] = useState<number[][]>([]);
  const [drawNumber, setDrawNumber] = useState<number>(0);

  //user Array to compare with
  const myArr = [1, 2, 3, 4, 5, 6];

  //declare
  let arraysOfHits = [];

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
  //clearing Results
  const clearResults = () => {
    setCountThree(0);
    setCountFour(0);
    setCountFive(0);
    setCountSix(0);
    setAddArrays([]);
    setDrawNumber(allResults.length);
  };
  let allResults: number[][] = [];

  const CalculateResults = () => {
    //Adding all results
    allResults = [...Random(arrayOptions), ...addArrays];
    setAddArrays(allResults);

    //Creating Array with hits
    arraysOfHits = allResults.map((random) =>
      random.filter(function (obj) {
        return myArr.indexOf(obj) !== -1;
      })
    );
    //check how many hits
    arraysOfHits.map((hitArray) => {
      if (hitArray.length === 3) {
        NUMBER_OF_THREES++;
      } else if (hitArray.length === 4) {
        NUMBER_OF_FOURS++;
      } else if (hitArray.length === 5) {
        NUMBER_OF_FIVES++;
      } else if (hitArray.length === 6) {
        NUMBER_OF_SIXES++;
      }
    });

    setDrawNumber(allResults.length);
    setWinningResults();
  };

  const handleCalculateResults = () => {
    CalculateResults();
  };

  return (
    <div className="App">
      <input
        value={howManyDraws}
        min="1"
        max="14000000"
        type="number"
        onChange={setDrawsHandler}
      ></input>
      <button onClick={handleCalculateResults}>Create Arr</button>
      <h1>Liczba losowań: {drawNumber}</h1>
      <h1>trójki: {countThree}</h1>
      <h1>czwórki {countFour}</h1>
      <h1>piątki {countFive}</h1>
      <h1>szóstki {countSix}</h1>
      <button onClick={clearResults}>Clear</button>
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}

export default App;
