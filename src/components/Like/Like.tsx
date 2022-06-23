import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  ContentWrapper,
  Desc,
  Shape1,
  Title,
  Wrapper,
  LinkRR,
  Thumb,
  LikeWrapper,
  Vote,
  LikeTitle,
  BeerWrapper,
  Beer,
} from "./Like.style";

const Like = () => {
  const [likeCounter, setLikeCounter] = useState<number>(0);

  useEffect(() => {
    axios.get("http://localhost:4000/api/likes/").then((response) => {
      setLikeCounter(response.data[1].count);
    });
  }, []);

  const likes = { count: likeCounter + 1 };
  const leavLike = async () => {
    await axios
      .put("http://localhost:4000/api/likes/62b373a3092b68073ff23f98", likes)
      .then((response) => {
        setLikeCounter(response.data.count);
      });
  };

  return (
    <Container id="like">
      <Wrapper>
        <ContentWrapper>
          <div>
            <Title>
              <b>Podoba Ci się ?</b>
            </Title>{" "}
            <Desc>To jeszcze nie koniec.</Desc>
            <Desc>
              Jeśli chcesz by aplikacja była rozwijana pokaż to bym wiedział, że
              nie robię tego tylko dla siebie. Kliknij Lajka lub postaw mi
              wirtualne piwo.
            </Desc>
            <Desc>
              {" "}
              W planach mam jeszcze dodanie opcji innych gier jak Multi Multi
              czy Mini Lotto. Rankingu najlepszych wyników. Jak również
              sprawdzania czy Twój numer już kiedyś padł w historii prawdziwych
              losowań.{" "}
            </Desc>
            <Desc>
              Masz inne pomysły jak ulepszyć stronę ? Odezwij się w zakładce{" "}
              <LinkRR to="/contact">kontakt</LinkRR>.
            </Desc>
          </div>
        </ContentWrapper>
        <Vote>
          <LikeWrapper onClick={leavLike}>
            <LikeTitle>Daj Lajka</LikeTitle>
            <LikeTitle>{likeCounter}</LikeTitle>
            <Thumb />
          </LikeWrapper>

          <BeerWrapper
            onClick={() =>
              window.open(
                "https://zrzutka.pl/",
                "zrzutka",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
              )
            }
          >
            <LikeTitle>Postaw Piwo</LikeTitle>
            <Beer />
          </BeerWrapper>
        </Vote>
      </Wrapper>
      <Shape1 />
    </Container>
  );
};

export default Like;
