import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.8;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    max-width: 700px;
  }

  @media (max-width: 850px) {
    margin-top: 1rem;
    flex: 1;

    form {
      padding: 1rem;
      width: 100%;
      max-height: 600px;
    }
  }
`;

export const Box = styled.div``;
