import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #E8EBF7;
    --black: #262626;
    --red: #e83f5b;
    --green: #7DDF64;
    --blue: #2aa9e0;
    --yellow: #FDE74C;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: var(--white);
    color: var(--black);
    display: flex;
    flex-direction: column;
  }

  /* Responsividade de tela */
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font: 700 1rem 'Harmattan', sans-serif;
  }

  button a {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
