import React, { useReducer } from "react";
import { innitialWinState, WinsReducer } from "../../utils/numberOfWinsReducer";
import {
  Assumptions,
  AssumptionsText,
  AssumptionsTitle,
  Container,
  GainsAndLoses,
  HallOfFame,
  Text,
  Title,
  Wrapper,
} from "./Expenses.style";

const Expenses = () => {
  const [numberOfWins, dispatchWins] = useReducer(
    WinsReducer,
    innitialWinState
  );
  

  console.log(numberOfWins.draws);
  return (
    <Container>
      <Wrapper>
        <GainsAndLoses>
          <Title>Twoje wygrane:</Title>
          <Text>trójki: </Text>
          <Text>czwórki: </Text>
          <Text>piątki: </Text>
          <Text>szóstki: </Text>
          <Text>suma: </Text>
          <Title></Title>
          <Text></Text>
          <Title></Title>
          <Text></Text>
          <Assumptions>
            <AssumptionsTitle>Założenia</AssumptionsTitle>
            <AssumptionsText>Wygrana za trójkę to 24zł</AssumptionsText>
            <AssumptionsText>
              Średnia wygrana za czwórkę z ostatnich 100 losowań to 170zł
            </AssumptionsText>
            <AssumptionsText>
              Średnia wygrana za piątkę z ostatnich 100 losowań to 5300zł
            </AssumptionsText>
            <AssumptionsText>
              Średnia wygrana za szóstkę z roku 2022 to 5.6mln zł
            </AssumptionsText>
          </Assumptions>
        </GainsAndLoses>
        <HallOfFame>b</HallOfFame>
      </Wrapper>
    </Container>
  );
};

export default Expenses;
