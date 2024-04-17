import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html{
    scroll-behavior: smooth;
  }

  body {
    display: flex;
    flex-direction: column;
    background: #010812;
    color: white;
    min-height: 100vh;
    /* font-family: 'Nunito', sans-serif; */
    /* font-family: 'Montserrat', sans-serif; */

  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  :root {
    --font-HindMadurai: 'Hind Madurai', sans-serif;
    --font-Lora: 'Lora', serif;
    --font-Montserrat: 'Montserrat', sans-serif;
  }
  
  h1 h2 h3 p {
    margin: 0;
  }
`;

export default globalStyles;
