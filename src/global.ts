import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
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
body{
  font-size: 5px;
} 
    
    `;

export default GlobalStyle;
