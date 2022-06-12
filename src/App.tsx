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
  //setting initial random array options
  const InitialArrOptions = {
    min: 1,
    max: 49,
    type: "array",
    arraySize: 6,
    unique: true,
  };

  //random user Array to compare with
  let innitialArray = Random(InitialArrOptions);

  //User shots
  const [hitOne, setHitOne] = useState<string>(innitialArray[0]);
  const [hitTwo, setHitTwo] = useState<string>(innitialArray[1]);
  const [hitThree, setHitThree] = useState<string>(innitialArray[2]);
  const [hitFour, setHitFour] = useState<string>(innitialArray[3]);
  const [hitFive, setHitFive] = useState<string>(innitialArray[4]);
  const [hitSix, setHitSix] = useState<string>(innitialArray[5]);

  const myArr = [
    parseInt(hitOne),
    parseInt(hitTwo),
    parseInt(hitThree),
    parseInt(hitFour),
    parseInt(hitFive),
    parseInt(hitSix),
  ];

  //number of wins state
  const [countThree, setCountThree] = useState<number>(0);
  const [countFour, setCountFour] = useState<number>(0);
  const [countFive, setCountFive] = useState<number>(0);
  const [countSix, setCountSix] = useState<number>(0);
  const [arrayOptions, setArrayOptions] = useState<{}>({} as Options);

  const [howManyDraws, setHowManyDraws] = useState<string>("1");
  const [arr3, setArr3] = useState<number[]>([]);
  let arr2: number[] = [];
  

  useEffect(() => {
    //random arrays settings
    setArrayOptions({
      min: 1,
      max: 49,
      type: "multi-array",
      numberOfArrays: howManyDraws,
      arraySize: 6,
      unique: true,
    });
  }, [howManyDraws]);

  const [addArrays, setAddArrays] = useState<number[][]>([]);
  const [drawNumber, setDrawNumber] = useState<number>(0);

  //check for duplicates in custom Array
  let findDuplicates = (arr: any) =>
    arr
      .filter((item: number, index: number) => arr.indexOf(item) !== index)
      .filter(function (value: number) {
        return !Number.isNaN(value);
      });
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
    setAddArrays(Random(arrayOptions));

    //Creating Array with hits
    const arraysOfHits = allResults.map((random) =>
      random.filter(function (obj) {
        return myArr.indexOf(obj) !== -1;
      })
    );

    //check how many hits
    arraysOfHits.map((hitArray) => {
      if (hitArray.length === 3) {
        
        NUMBER_OF_THREES++;
        arr2 = [...arr3, NUMBER_OF_THREES];
        setArr3(arr2);
        console.log(arr2);
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
    const duplicates: number[] = findDuplicates(myArr);
    if (howManyDraws === "" || howManyDraws === "0") {
      console.log("Uzupełnij Pola", myArr.includes(NaN));
      return;
    } else if (duplicates.length > 0) {
      console.log("Conajmniej dwa pola mają ten sam numer", duplicates.length);

      return;
    }

    CalculateResults();
  };

  return (
    <div className="App">
      <div>
        <h2>Wpisz swoje numery</h2>

        <input
          value={hitOne}
          min="1"
          max="49"
          type="number"
          onChange={(e) => setHitOne(e.target.value || "")}
        ></input>
        <input
          value={hitTwo}
          min="1"
          max="49"
          type="number"
          onChange={(e) => setHitTwo(e.target.value || "")}
        ></input>
        <input
          value={hitThree}
          min="1"
          max="49"
          type="number"
          onChange={(e) => setHitThree(e.target.value || "")}
        ></input>
        <input
          value={hitFour}
          min="1"
          max="49"
          type="number"
          onChange={(e) => setHitFour(e.target.value || "")}
        ></input>
        <input
          value={hitFive}
          min="1"
          max="49"
          type="number"
          onChange={(e) => setHitFive(e.target.value || "")}
        ></input>
        <input
          value={hitSix}
          min="1"
          max="49"
          type="number"
          onChange={(e) => setHitSix(e.target.value || "")}
        ></input>
        <input
          value={howManyDraws ? howManyDraws : ""}
          min="1"
          max="14000000"
          type="number"
          onChange={(e) => setHowManyDraws(e.target.value || "")}
        ></input>
      </div>
      <button onClick={handleCalculateResults}>Create Arr</button>
      <h1>Liczba losowań: {drawNumber}</h1>
      <h1>trójki: {countThree}</h1>
      <h1>czwórki {countFour}</h1>
      <h1>piątki {countFive}</h1>
      <h1>szóstki {countSix}</h1>
      <button onClick={clearResults}>Clear</button>
    </div>
  );
}

export default App;
