import React from "react";
import { WinsState } from "../../../utils/numberOfWinsReducer";

type Props = {
  numberOfWins: WinsState;
  clearResults: React.MouseEventHandler<HTMLButtonElement>;
  errorMsg: string;
};

const Results: React.FC<Props> = ({
  numberOfWins: { draws, fives, fours, threes, sixes },
  clearResults,
  errorMsg,
}) => {
  return (
    <div>
      
      <h1>Liczba losowań: {draws}</h1>
      <h1>trójki: {threes}</h1>
      <h1>czwórki {fours}</h1>
      <h1>piątki {fives}</h1>
      <h1>szóstki {sixes}</h1>
      <button onClick={clearResults}>Clear</button>
      <h2 style={{ color: "red" }}>{errorMsg}</h2>
    </div>
  );
};

export default Results;
