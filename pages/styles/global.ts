import { createGlobalStyle } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  *{
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  body {
    background: ${props => props.theme.colors.rainbow};
  }
`;