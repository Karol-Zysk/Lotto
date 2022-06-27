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
  Shape,
} from "./Like.style";
import LikeandBeer from "./Parts/LikeandBeer";

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
  const leaveLike = async () => {
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
        <LikeandBeer
          isLiked={isLiked}
          likeCounter={likeCounter}
          isLoading={isLoading}
          leaveLike={leaveLike}
        />
      </Wrapper>
      <Shape1 />
      <Shape />
    </Container>
  );
};

export default Like;
