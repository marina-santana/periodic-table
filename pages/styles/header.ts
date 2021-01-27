import styled from 'styled-components';

interface ContainerProps {
  darkMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 20px;
  color: ${props => props.darkMode? props.theme.colors.malibu :  props.theme.colors.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1{
    font-size: 3rem;
  }

  > div{
    left: calc(100vw - 250px);
    position: absolute;
    display: flex;
    align-items: center;
  }

  div > span{
    font-size: 1.8rem;
    margin: 0 10px;
  }
`;