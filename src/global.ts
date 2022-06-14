import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Encode Sans Expanded', sans-serif;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  font-family: 'Orbitron', sans-serif;
}

input[type="number"] {
  -moz-appearance: textfield;
  font-family: 'Orbitron', sans-serif;
}   
    
    `;

export default GlobalStyle;
