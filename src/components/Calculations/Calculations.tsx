import React, { useEffect, useReducer, useState } from "react";
//@ts-ignore
import Random from "random-number-arrays";
import { findDuplicates } from "../../utils/options";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  innitialArrayState,
  userHitsReducer,
} from "../../utils/userArrayReducer";
import { innitialWinState, WinsReducer } from "../../utils/numberOfWinsReducer";
import Inputs from "./Parts/Inputs";
import Results from "./Parts/Results";
import {
  CalculationsTitle,
  Container,
  customStyles,
  ResultsAndArrow,
  Shape,
  Shape1,
  SmallShape,
  SmallShape2,
  WinSubText,
  WinText,
  Wrapper,
} from "./Calculations.style";
import Expenses from "../Expenses/Expenses";
import Arrow from "./Parts/Arrow";
import { notificationEmitter } from "../../utils/notifications";
import { systemTypes } from "../../../type";
import Modal from "react-modal";
import { AnimatePresence } from "framer-motion";

function Calculations() {
  const [userHits, dispatch] = useReducer(userHitsReducer, innitialArrayState);
  const [numberOfWins, dispatchWins] = useReducer(
    WinsReducer,
    innitialWinState
  );

  const [system, setSystem] = useState<systemTypes>(6);
  const [price, setSprice] = useState<number>(4);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [win, setWin] = useState<number>(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (system === 6) {
      setSprice(4);
    }
    if (system === 7) {
      setSprice(21);
    }
    if (system === 8) {
      setSprice(84);
    }
    if (system === 9) {
      setSprice(252);
    }
    if (system === 10) {
      setSprice(630);
    }
    if (system === 11) {
      setSprice(1386);
    }
    if (system === 12) {
      setSprice(2772);
    }
  }, [system]);

  //user declares  number of draws then inserting data into RandomDrawOptions
  const [howManyDraws, setHowManyDraws] = useState<string>("1");

  //User shots
  const mySystemArr: number[] = [
    parseInt(userHits.hitOne),
    parseInt(userHits.hitTwo),
    parseInt(userHits.hitThree),
    parseInt(userHits.hitFour),
    parseInt(userHits.hitFive),
    parseInt(userHits.hitSix),
    parseInt(userHits.hitSeven),
    parseInt(userHits.hitEight),
    parseInt(userHits.hitNine),
    parseInt(userHits.hitTen),
    parseInt(userHits.hitEleven),
    parseInt(userHits.hitTwelve),
  ];

  // User Shots after system
  const myArr = mySystemArr.slice(0, system);

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

        setWin(numberOfWins.draws + index);
        openModal();

        return 0;
      }
      return 0;
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
      userHits.hasOwnProperty("") ||
      howManyDraws === "" ||
      howManyDraws === "0" ||
      howManyDraws === "-"
    ) {
      notificationEmitter("Uzupełnij Pola Liczbami");
      return;
    } else if (valuesInRange_0_49) {
      notificationEmitter("Tylko liczby z zakresu 1-49");
      return;
    } else if (duplicates.length > 0) {
      notificationEmitter("Conajmniej dwa pola mają ten sam numer");
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
    <>
      <Container id="calculator">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <WinText>Gratulacje!</WinText>{" "}
          <WinSubText>Trafiłeś/aś 6 w losowaniu nr: {win}</WinSubText>
        </Modal>
        <ToastContainer
          toastStyle={{
            backgroundColor: "blue",
            fontSize: "0.9rem",
            marginTop: "4.5rem",
            fontWeight: "bold",
            color: "yellow !important",
          }}
        />
        <CalculationsTitle>Symulacja Losowania</CalculationsTitle>
        <Wrapper>
          <Inputs
            price={price}
            setSystem={setSystem}
            system={system}
            howManyDraws={howManyDraws}
            setHowManyDraws={setHowManyDraws}
            dispatch={dispatch}
            userHits={userHits}
            handleCalculateResults={handleCalculateResults}
          />
          <ResultsAndArrow>
            <Results numberOfWins={numberOfWins} clearResults={clearResults} />
          </ResultsAndArrow>
        </Wrapper>
        <Arrow path="expenses" text="Podsumowanie" />
        <Shape1 />
        <Shape />
        <SmallShape />
        <SmallShape2 />
      </Container>
      <Expenses price={price} numberOfWins={numberOfWins} />
    </>
  );
}

export default Calculations;
