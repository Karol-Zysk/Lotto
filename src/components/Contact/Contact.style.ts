import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 0;
  overflow: hidden;
  background: yellow;
`;

export const FormWrap = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75%;
  min-width: 400px;
  @media screen and (max-width: 768px) {
    min-width: 350px;
  }
  @media screen and (max-width: 486) {
    min-width: 300px;
  }
`;

export const Icon = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: blue;
  font-weight: bolder;
  font-size: 2rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: blue;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 986px) {
    padding: 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: yellow;
  font-weight: bold;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: yellow;
  font-weight: bold;
`;

export const FormInput = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  background: yellow;
  padding: 1rem 0;
  border: none;
  border-radius: 5px;
  color: blue;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

export const FormTextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 5px;
`;
