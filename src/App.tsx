import React, { useReducer, useState } from "react";
//@ts-ignore
import Random from "random-number-arrays";
import "./App.css";
import { findDuplicates } from "./utils/options";
import { innitialArrayState, userHitsReducer } from "./utils/userArrayReducer";
import { innitialWinState, WinsReducer } from "./utils/numberOfWinsReducer";

function App() {
  const [userHits, dispatch] = useReducer(userHitsReducer, innitialArrayState);
  const [numberOfWins, dispatchWins] = useReducer(
    WinsReducer,
    innitialWinState
  );

  //User shots
  const myArr: number[] = [
    parseInt(userHits.hitOne),
    parseInt(userHits.hitTwo),
    parseInt(userHits.hitThree),
    parseInt(userHits.hitFour),
    parseInt(userHits.hitFive),
    parseInt(userHits.hitSix),
  ];


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
    //summing hits from draws
    arraysOfHits.map((hitArray) => {
      if (hitArray.length === 3) {
        dispatchWins({
          type: "SET_THREES",
          payload: 1,
        });
      } else if (hitArray.length === 4) {
        dispatchWins({
          type: "SET_FOURS",
          payload: 1,
        });
      } else if (hitArray.length === 5) {
        dispatchWins({
          type: "SET_FIVES",
          payload: 1,
        });
      } else if (hitArray.length === 6) {
        dispatchWins({
          type: "SET_SIXES",
          payload: 1,
        });
      }
    });

    //setting number of draws
    dispatchWins({
      type: "SET_DRAWS",
      payload: arraysOfHits.length,
    });
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
    dispatchWins({
      type: "CLEAR_DRAWS",
      payload: 0,
    });
  };

  return (
    <div className="App">
      <div>
        <h2>Wpisz swoje numery</h2>

        <input
          value={userHits.hitOne}
          min="1"
          max="49"
          type="number"
          onChange={(event) =>
            dispatch({ type: "SET_HIT_ONE", payload: event.target.value })
          }
        />
        <input
          value={userHits.hitTwo}
          min="1"
          max="49"
          type="number"
          onChange={(event) =>
            dispatch({ type: "SET_HIT_TWO", payload: event.target.value })
          }
        />
        <input
          value={userHits.hitThree}
          min="1"
          max="49"
          type="number"
          onChange={(event) =>
            dispatch({ type: "SET_HIT_THREE", payload: event.target.value })
          }
        />
        <input
          value={userHits.hitFour}
          min="1"
          max="49"
          type="number"
          onChange={(event) =>
            dispatch({ type: "SET_HIT_FOUR", payload: event.target.value })
          }
        />
        <input
          value={userHits.hitFive}
          min="1"
          max="49"
          type="number"
          onChange={(event) =>
            dispatch({ type: "SET_HIT_FIVE", payload: event.target.value })
          }
        />
        <input
          value={userHits.hitSix}
          min="1"
          max="49"
          type="number"
          onChange={(event) =>
            dispatch({ type: "SET_HIT_SIX", payload: event.target.value })
          }
        />
        <input
          value={howManyDraws ? howManyDraws : ""}
          min="1"
          max="20000000"
          type="number"
          onChange={(e) => setHowManyDraws(e.target.value || "")}
        />
      </div>
      <button onClick={handleCalculateResults}>Create Arr</button>
      <h1>Liczba losowań: {numberOfWins.draws}</h1>
      <h1>trójki: {numberOfWins.threes}</h1>
      <h1>czwórki {numberOfWins.fours}</h1>
      <h1>piątki {numberOfWins.fives}</h1>
      <h1>szóstki {numberOfWins.sixes}</h1>
      <button onClick={clearResults}>Clear</button>
      <h2 style={{ color: "red" }}>{errorMsg}</h2>
    </div>
  );
}

export default App;
