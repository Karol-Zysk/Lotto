import React from "react";
import { LikeProps } from "../../../../type";
import {
  Beer,
  BeerWrapper,
  Flex,
  LikeTitle,
  LikeWrapper,
  Thumb,
  Vote,
} from "../Like.style";

const LikeandBeer:React.FC<LikeProps> = ({ isLiked, likeCounter, isLoading, leaveLike }) => {
  return (
    <Vote>
      <LikeWrapper
        $isLiked={isLiked} //@ts-ignore
        onClick={!isLoading && !isLiked ? leaveLike : null}
      >
        {isLoading ? (
          <LikeTitle>Loading</LikeTitle>
        ) : (
          <>
            <Flex>
              <div>
                <LikeTitle>{isLiked ? "Dzięki" : "Like"}</LikeTitle>
              </div>

              <Thumb $isLiked={isLiked} />
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
  );
};

export default LikeandBeer;
