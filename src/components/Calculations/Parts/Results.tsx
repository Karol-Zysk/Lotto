/* eslint-disable react-hooks/exhaustive-deps */
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
  Result,
  ResultsContainer,
  ResultsText,
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
        <ResultsText>3. Wyniki</ResultsText>
        <Result>
          Liczba losowań: <Counter from={fromDraw} to={draws} />
        </Result>
        <Result>
          trójki: <Counter from={fromThree} to={threes} />
        </Result>
        <Result>
          czwórki: <Counter from={fromFour} to={fours} />
        </Result>
        <Result>
          piątki: <Counter from={fromFive} to={fives} />
        </Result>
        <Result>
          szóstki: <Counter from={fromSix} to={sixes} />
        </Result>
      </ResultsWrapper>
      <BtnWrapper>
        <Button onClick={clearResults}>Wyczyść</Button>
      </BtnWrapper>
    </ResultsContainer>
  );
};

export default Results;
