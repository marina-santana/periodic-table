import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: 112px;
  height: 100px;
  background: ${props => props.backgroundColor};
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    font-size: 1.5rem;
  }

  span{
    margin: 5px 0;
    max-width: 80%;
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
  }
`;