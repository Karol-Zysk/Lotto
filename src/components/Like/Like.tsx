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
  Flex,
} from "./Like.style";

const Like = () => {
  const [likeCounter, setLikeCounter] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLikes = async () => {
    await axios
      .get("http://localhost:4000/api/likes/62b373a3092b68073ff23f98")
      .then((response) => {
        setLikeCounter(response.data.count);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    setLikes();
    const voted = localStorage.getItem("liked");
    if (voted) {
      setIsLiked(true);
    } else {
      return;
    }
  }, []);

  const likes = { count: likeCounter + 1 };
  const leavLike = async () => {
    setIsLoading(true);

    await axios
      .put("http://localhost:4000/api/likes/62b373a3092b68073ff23f98", likes)
      .then((response) => {
        localStorage.setItem("liked", "liked");
        setIsLiked(true);
        setLikeCounter(response.data.count);
        setIsLoading(false);
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
          <LikeWrapper
            isLiked={isLiked} //@ts-ignore
            onClick={!isLoading && !isLiked ? leavLike : null}
          >
            {isLoading ? (
              <LikeTitle>Loading</LikeTitle>
            ) : (
              <>
                <Flex>
                  <div>
                    <LikeTitle>{isLiked ? "Dzięki" : "Like"}</LikeTitle>
                  </div>

                  <Thumb isLiked={isLiked} />
                </Flex>

                <LikeTitle>{likeCounter}</LikeTitle>
              </>
            )}
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
