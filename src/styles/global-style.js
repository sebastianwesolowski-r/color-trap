import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Righteous', cursive;
    color: ${props => props.theme.dark};
    user-select: none;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #17171A;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 140px;
  }
`;

export default GlobalStyle;