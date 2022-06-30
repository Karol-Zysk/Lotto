import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";
import { IoBeerOutline } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: auto;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: blue;
  display: flex;
  z-index: 0;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  height: 70%;
  margin-top: 2rem;
  /* margin-top: 90px; */
  @media (max-width: 1480px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const Shape1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  clip-path: polygon(100% 0%, 53% 0%, 53% 100%, 100% 100%);
  background-color: yellow;

  @media (max-width: 768px) {
    background-color: yellow;
    clip-path: circle(25.9% at 100% 0);
  }
`;
export const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  background-color: yellow;
  display: none;

  @media (max-width: 768px) {
    clip-path: circle(20.8% at 23% 100%);
  }
`;

export const ContentWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 55%;
  color: yellow;
  text-shadow: 2px 0px 2px black;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 0.5rem 1rem;
  }
`;
export const Vote = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 45%;
  color: yellow;
  text-shadow: 2px 0px 2px black;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Title = styled.p`
  font-size: 2.1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1300px) {
    font-size: 2rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.9rem;
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;
export const LikeTitle = styled.p`
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Desc = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.7rem;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }
`;

type LikeProps = {
  $isLiked: boolean;
};

export const LikeWrapper = styled.div<LikeProps>`
  width: 10rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid blue;
  border-radius: 15px;
  padding: 1rem;
  background-color: white;
  color: blue;
  text-shadow: none;
  font-weight: bold;
  filter: ${({ $isLiked }) =>
    $isLiked ? "brightness(1)" : "brightness(0.85)"};
  /* margin-bottom: 2rem; */
  transition: 200ms ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
    height: 4rem;
    width: 8rem;
    margin-bottom: 0;
  }
  @media (max-width: 420px) {
    height: 3.5rem;
    width: 7rem;
  }
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
  font-size: 2.2rem;
  margin-bottom: 0.2rem;
  color: ${({ $isLiked }) => ($isLiked ? "gold" : "blue")};
  transform: ${({ $isLiked }) => ($isLiked ? "rotate(-15deg)" : null)};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
`;
export const Beer = styled(IoBeerOutline)`
  font-size: 3.5rem;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 420px) {
    font-size: 2.05rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
`;

export const BeerWrapper = styled.div`
  width: 10rem;
  max-height: 6rem;
  justify-content: space-between;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
  border: 3px solid orange;
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
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
    height: 4rem;
    width: 8rem;
    margin-bottom: 0;
  }
  @media (max-width: 420px) {
    height: 3.5rem;
    width: 7rem;
  }
`;
