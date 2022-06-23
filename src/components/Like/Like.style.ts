import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";
import { IoBeerOutline } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  max-height: auto;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: blue;
  display: flex;
  z-index: 0;
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  height: 100%;
  padding-top: 1rem;
  margin-top: 110px;
`;

export const Shape1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(100% 0%, 53% 0%, 53% 100%, 100% 100%);
  background-color: yellow;
  z-index: -1;
`;

export const ContentWrapper = styled.div`
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 55%;
  color: yellow;
  text-shadow: 2px 0px 2px black;
  padding: 2rem;
`;
export const Vote = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 45%;
  color: yellow;
  text-shadow: 2px 0px 2px black;
  padding: 2rem;
`;

export const Title = styled.p`
  font-size: 2.1rem;
  margin-bottom: 1.5rem;
`;
export const LikeTitle = styled.p`
  font-size: 1.4rem;
`;

export const Desc = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.7rem;
`;

type LikeProps = {
  $isLiked: boolean;
};

export const LikeWrapper = styled.div<LikeProps>`
  width: 40%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid blue;
  border-radius: 15px;
  padding: 1rem;
  background-color: white;
  color: blue;
  text-shadow: none;
  font-weight: bold;
  filter: ${({ $isLiked }) =>
    $isLiked ? "brightness(1)" : "brightness(0.85)"};
  margin-bottom: 2rem;
  transition: 200ms ease-in-out;
  &:hover {
    transition: 200ms ease-in-out;
    filter: brightness(1);
    transform: ${({ $isLiked }) => ($isLiked ? "none" : "scaleX(1.05)")};
    cursor: pointer;
  }
`;

export const LinkRR = styled(Link)`
  color: yellow;
  text-decoration: underline;
`;

export const Thumb = styled(FiThumbsUp)<LikeProps>`
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  transform: ${({ $isLiked }) => ($isLiked ? "rotate(-15deg)" : null)};
`;
export const Beer = styled(IoBeerOutline)`
  font-size: 3.5rem;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const BeerWrapper = styled.div`
  width: 40%;
  justify-content: space-between;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
  border: 2px solid orange;
  border-radius: 15px;
  padding: 1rem;
  background-color: white;
  color: orange;
  text-shadow: none;
  font-weight: bold;
  filter: brightness(0.85);
  transition: 200ms ease-in-out;
  &:hover {
    transition: 200ms ease-in-out;
    transform: scale(1.02);
    filter: brightness(1);
    cursor: pointer;
  }
`;
