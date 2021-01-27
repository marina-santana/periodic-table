import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  margin: 20px 40px 40px;
  overflow-x: scroll; 
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  cursor: pointer;

  ::-webkit-scrollbar {
    width: 0px;
  }

 
`;

export const WrapperColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 112px);
  align-items: end;
`;

export const WrapperRow = styled.div`
  width: fit-content;
  margin-top: 40px;
  margin-left: 336px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;