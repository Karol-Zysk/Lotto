import React, { useEffect, useReducer, useState } from "react";
import {
  CounterReducer,
  innitialCounterState,
} from "../../../utils/counterReducer";
import { WinsState } from "../../../utils/numberOfWinsReducer";
import Counter from "../../Counter/Counter";
import {
  BtnWrapper,
  Button,
  Num,
  Result,
  ResultsContainer,
  ResultsWrapper,
} from "../Calculations.style";

type Props = {
  numberOfWins: WinsState;
  clearResults: React.MouseEventHandler<HTMLButtonElement>;
};

const Results: React.FC<Props> = ({
  numberOfWins: { draws, fives, fours, threes, sixes },
  clearResults,
}) => {
  const [state, dispatch] = useReducer(CounterReducer, innitialCounterState);

  const [fromDraw, setFromDraw] = useState(0);
  const [fromThree, setFromThree] = useState(0);
  const [fromFour, setFromFour] = useState(0);
  const [fromFive, setFromFive] = useState(0);
  const [fromSix, setFromSix] = useState(0);

  useEffect(() => {
    setFromDraw(state.drawsCount);
    setFromThree(state.threesCount);
    setFromFour(state.foursCount);
    setFromFive(state.fivesCount);
    setFromSix(state.sixesCount);
    dispatch({
      type: "COUNT_DRAWS",
      payload: draws,
    });
    dispatch({
      type: "COUNT_THREES",
      payload: threes,
    });
    dispatch({
      type: "COUNT_FOURS",
      payload: fours,
    });
    dispatch({
      type: "COUNT_FIVES",
      payload: fives,
    });
    dispatch({
      type: "COUNT_SIXES",
      payload: sixes,
    });
  }, [draws, fives, fours, sixes, threes]);
  return (
    <ResultsContainer>
      <ResultsWrapper>
        <Result style={{ fontSize: "1.5rem" }}>
          Liczba losowań:{" "}
          <Num>
            <Counter from={fromDraw} to={draws} />
          </Num>
        </Result>
        <Result style={{ fontSize: "1.1rem" }}>
          trójki:{" "}
          <Num>
            <Counter from={fromThree} to={threes} />
          </Num>
        </Result>
        <Result style={{ fontSize: "1.2rem" }}>
          czwórki:{" "}
          <Num>
            <Counter from={fromFour} to={fours} />
          </Num>
        </Result>
        <Result style={{ fontSize: "1.4rem" }}>
          piątki:{" "}
          <Num>
            <Counter from={fromFive} to={fives} />
          </Num>
        </Result>
        <Result style={{ fontSize: "1.6rem" }}>
          szóstki:{" "}
          <Num>
            <Counter from={fromSix} to={sixes} />
          </Num>
        </Result>
      </ResultsWrapper>
      <BtnWrapper>
        <Button onClick={clearResults}>Wyczyść</Button>
      </BtnWrapper>
    </ResultsContainer>
  );
};

export default Results;
