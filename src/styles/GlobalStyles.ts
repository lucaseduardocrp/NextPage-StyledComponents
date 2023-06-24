import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body{
    list-style: none;
    text-decoration: none;
  }
`;

export default GlobalStyles;