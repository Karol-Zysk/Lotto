import React, { useReducer, useState } from "react";
//@ts-ignore
import Random from "random-number-arrays";
import { findDuplicates } from "../../utils/options";
import {
  innitialArrayState,
  userHitsReducer,
} from "../../utils/userArrayReducer";
import { innitialWinState, WinsReducer } from "../../utils/numberOfWinsReducer";
import Inputs from "./Parts/Inputs";
import Results from "./Parts/Results";
import { CalculationsTitle, Container, Wrapper } from "./Calculations.style";

function Calculations() {
  const [userHits, dispatch] = useReducer(userHitsReducer, innitialArrayState);

  const [numberOfWins, dispatchWins] = useReducer(
    WinsReducer,
    innitialWinState
  );

  const [errorMsg, setErrorMsg] = useState<string>("");

  //user declares  number of draws then inserting data into RandomDrawOptions
  const [howManyDraws, setHowManyDraws] = useState<string>("1");

  //User shots
  const myArr: number[] = [
    parseInt(userHits.hitOne),
    parseInt(userHits.hitTwo),
    parseInt(userHits.hitThree),
    parseInt(userHits.hitFour),
    parseInt(userHits.hitFive),
    parseInt(userHits.hitSix),
  ];

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
    //sum of hits from the draws
    arraysOfHits.map((hitArray, index) => {
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

        console.log(
          `Gratulacje! Trafiłeś 6 w losowaniu nr ${
            numberOfWins.draws + index
          }, czwórki: ${numberOfWins.fours}`
        );

        return;
      }
    });
    //setting number of draws
    dispatchWins({
      type: "SET_DRAWS",
      payload: arraysOfHits.length,
    });
  };

  //looking for errors before calculating results
  const handleCalculateResults = () => {
    const valuesInRange_0_49 = myArr.some((arg) => arg < 1 || arg > 49);

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
    setErrorMsg("");
  };

  //clearing Results
  const clearResults = () => {
    dispatchWins({
      type: "CLEAR_DRAWS",
      payload: 0,
    });
  };
  //srednia suma wygranych 2022 5,6mln
  return (
    <Container>
      <CalculationsTitle>Symulacja Losowania</CalculationsTitle>
      <Wrapper>
        <Inputs
          howManyDraws={howManyDraws}
          setHowManyDraws={setHowManyDraws}
          dispatch={dispatch}
          userHits={userHits}
          handleCalculateResults={handleCalculateResults}
          errorMsg={errorMsg}
        />
        <Results numberOfWins={numberOfWins} clearResults={clearResults} />
      </Wrapper>
    </Container>
  );
}

export default Calculations;
