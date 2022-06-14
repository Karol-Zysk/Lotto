import React from "react";
import { WinsState } from "../../../utils/numberOfWinsReducer";
import { Button, Num, Result, ResultsContainer } from "../Calculations.style";

type Props = {
  numberOfWins: WinsState;
  clearResults: React.MouseEventHandler<HTMLButtonElement>;
};

const Results: React.FC<Props> = ({
  numberOfWins: { draws, fives, fours, threes, sixes },
  clearResults,
}) => {
  return (
    <ResultsContainer>
      <Result>
        Liczba losowań: <Num>{draws}</Num>
      </Result>
      <Result>
        trójki: <Num>{threes}</Num>
      </Result>
      <Result>
        czwórki <Num>{fours}</Num>
      </Result>
      <Result>
        piątki <Num>{fives}</Num>
      </Result>
      <Result>
        szóstki <Num>{sixes}</Num>
      </Result>
      <Button  onClick={clearResults}>
        Clear
      </Button>
    </ResultsContainer>
  );
};

export default Results;
