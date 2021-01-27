
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 1;
  height: 100vh;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
  background: ${props => props.theme.colors.bgModal};
  @media (max-width: 650px){
    padding-top: 0;
    align-items: center;
  }
`;
