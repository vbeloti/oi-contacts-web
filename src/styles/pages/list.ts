import styled from 'styled-components';

export const Container = styled.div`
  display: flex;


  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const ContainerHeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
`;

export const ContainerFormPeople = styled.div`
  flex: 0.8;
  justify-content: space-evenly;
  align-items: center;
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
  }

`;
