import { createGlobalStyle } from 'styled-components';
interface GlobalStyleProps {
  darkMode: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  *{
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  .active{
    background: rgba(255,255,255,0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;