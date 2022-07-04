import { useState } from "react";
import { WinsState } from "../../utils/numberOfWinsReducer";
import { numberWithCommas } from "../../utils/options";
import {
  BiggerText,
  BigText,
  ButtonBlue,
  Container,
  GainsAndLoses,
  MoreText,
  Shape,
  Shape1,
  Text,
  TextWrapper,
  Title,
  Wrapper,
  AsteriskIcon,
  Assumptions,
  AssumptionsTitle,
  AssumptionsText,
} from "./Expenses.style";
import Modal from "react-modal";
import { customStyles } from "../Calculations/Calculations.style";



type Props = {
  numberOfWins: WinsState;
  price: number;
};

const Expenses: React.FC<Props> = ({
  price,
  numberOfWins: { draws, fives, fours, threes, sixes },
}) => {
  const [moreInfo, setMoreInfo] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const threePay = threes * 24;
  const fourPay = fours * 170;
  const fivePay = fives * 5300;
  const sixPay = sixes * 5600000;
  const sumOfWins = threePay + fourPay + fivePay + sixPay;

  const moneySpent = draws * price;

  const balance = sumOfWins - moneySpent;

  return (
    <Container id="expenses">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
      </Modal>
      <Shape />
      <Shape1 />
      <Wrapper>
        <GainsAndLoses>
          <BigText>
            {" "}
            {draws === 0 ? (
              <>
                Zagraj i sprawdź<br></br> zyskasz czy stracisz?{" "}
              </>
            ) : draws !== 0 && balance === 0 ? (
              "wychodzisz na zero"
            ) : balance < 0 ? (
              `Straciłeś/aś: ${numberWithCommas(Math.abs(balance))} zł`
            ) : (
              `Wow. Jesteś do przodu o: ${numberWithCommas(balance)} zł`
            )}{" "}
            <AsteriskIcon onClick={openModal} />
          </BigText>
          <ButtonBlue onClick={() => setMoreInfo(!moreInfo)}>
            {!moreInfo ? "Więcej Informacji" : "Mniej Informacji"}
          </ButtonBlue>
          <MoreText>
            {moreInfo && (
              <>
                <TextWrapper>
                  <Title>Wydałeś:</Title>
                  <Text>{numberWithCommas(moneySpent)} zł</Text>
                </TextWrapper>
                <TextWrapper>
                  <Title>Wygrałeś/aś</Title>
                  <Text>trójki: {numberWithCommas(threePay)} zł </Text>
                  <Text>czwórki: {numberWithCommas(fourPay)} zł</Text>
                  <Text>piątki: {numberWithCommas(fivePay)} zł</Text>
                  <Text>szóstki: {numberWithCommas(sixPay)} zł</Text>
                  <BiggerText>
                    Suma wygranych: {numberWithCommas(sumOfWins)} zł
                  </BiggerText>
                </TextWrapper>
              </>
            )}
          </MoreText>
        </GainsAndLoses>
      </Wrapper>
    </Container>
  );
};

export default Expenses;
