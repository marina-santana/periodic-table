import styled from 'styled-components';

interface ContainerProps {
  darkMode: boolean;
}

export const Container = styled.main<ContainerProps>`
  background: ${props => props.darkMode? props.theme.colors.mirage : props.theme.colors.rainbow};
  font-family: 'Roboto', sans-serif;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .active{
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;
