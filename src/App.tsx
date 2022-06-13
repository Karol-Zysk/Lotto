import React, { useState } from "react";
//@ts-ignore
import Random from "random-number-arrays";
import "./App.css";
import { findDuplicates } from "./utils/options";

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

  const [pupu, setPupu] = useState([
    innitialArray[0],
    innitialArray[1],
    innitialArray[2],
    innitialArray[3],
    innitialArray[4],
    innitialArray[5],
  ]);

  console.log(pupu);

  const myArr = [
    parseInt(hitOne),
    parseInt(hitTwo),
    parseInt(hitThree),
    parseInt(hitFour),
    parseInt(hitFive),
    parseInt(hitSix),
  ];

  //number of wins state and draws
  const [countThree, setCountThree] = useState<number>(0);
  const [countFour, setCountFour] = useState<number>(0);
  const [countFive, setCountFive] = useState<number>(0);
  const [countSix, setCountSix] = useState<number>(0);
  const [countDraws, setCountDraws] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>("");

  //user declares  number of draws
  const [howManyDraws, setHowManyDraws] = useState<string>("1");

  let RandomDrawOptions = {
    min: 1,
    max: 49,
    type: "multi-array",
    numberOfArrays: howManyDraws,
    arraySize: 6,
    unique: true,
  };

  let NUMBER_OF_THREES = 0;
  let NUMBER_OF_FOURS = 0;
  let NUMBER_OF_FIVES = 0;
  let NUMBER_OF_SIXES = 0;
  let NUMBER_OF_DRAWS = 0;

  let SUM_OF_THREES = 0;
  let SUM_OF_FOURS = 0;
  let SUM_OF_FIVES = 0;
  let SUM_OF_SIXES = 0;

  let allResults: number[][] = [];

  const CalculateResults = () => {
    //Creating Array of Random Values
    allResults = Random(RandomDrawOptions);

    //Creating Array with hits
    const arraysOfHits = allResults.map((random) =>
      random.filter(function (obj) {
        return myArr.indexOf(obj) !== -1;
      })
    );

    //check how many hits
    //SUM_OF.. summing hits from draws
    arraysOfHits.map((hitArray) => {
      if (hitArray.length === 3) {
        NUMBER_OF_THREES++;
        SUM_OF_THREES = countThree + NUMBER_OF_THREES;
        setCountThree(SUM_OF_THREES);
      } else if (hitArray.length === 4) {
        NUMBER_OF_FOURS++;
        SUM_OF_FOURS = countFour + NUMBER_OF_FOURS;
        setCountFour(SUM_OF_FOURS);
      } else if (hitArray.length === 5) {
        NUMBER_OF_FIVES++;
        SUM_OF_FIVES = countFive + NUMBER_OF_FIVES;
        setCountFive(SUM_OF_FIVES);
      } else if (hitArray.length === 6) {
        NUMBER_OF_SIXES++;
        SUM_OF_SIXES = countSix + NUMBER_OF_SIXES;
        setCountSix(SUM_OF_SIXES);
      }
    });

    //setting number of draws
    NUMBER_OF_DRAWS = countDraws + arraysOfHits.length;
    setCountDraws(NUMBER_OF_DRAWS);
  };

  const handleCalculateResults = () => {
    const valuesInRange_0_49 = myArr.some((arg) => arg < 0 || arg > 49);
    const duplicates: number[] = findDuplicates(myArr);
    if (
      myArr.includes(NaN) ||
      howManyDraws === "" ||
      howManyDraws === "0" ||
      howManyDraws === "-"
    ) {
      setErrorMsg("Uzupełnij Pola Liczbami");
      return;
    } else if (valuesInRange_0_49) {
      setErrorMsg("Tylko liczby z zakresu 1-49");
      return;
    } else if (duplicates.length > 0) {
      setErrorMsg("Conajmniej dwa pola mają ten sam numer");
      return;
    }

    CalculateResults();
  };

  //clearing Results
  const clearResults = () => {
    setCountThree(0);
    setCountFour(0);
    setCountFive(0);
    setCountSix(0);
    setCountDraws(0);
  };

  return (
    <div className="App">
      <div>
        <h2>Wpisz swoje numery</h2>

        <input
          value={pupu[0]}
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
      <h1>Liczba losowań: {countDraws}</h1>
      <h1>trójki: {countThree}</h1>
      <h1>czwórki {countFour}</h1>
      <h1>piątki {countFive}</h1>
      <h1>szóstki {countSix}</h1>
      <button onClick={clearResults}>Clear</button>
      <h2 style={{ color: "red" }}>{errorMsg}</h2>
    </div>
  );
}

export default App;
