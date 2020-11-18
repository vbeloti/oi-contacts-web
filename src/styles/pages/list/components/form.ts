import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  max-height: 600px;
  padding: 2rem;

  form {
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (max-width: 850px) {
    width: 100%;
    margin-top: 1rem;
    flex: 1;

    form {
      width: 100%;
    }
  }

`;

export const BoxUfCity = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  div {
    margin-right: 1rem;
  }
`;

export const BoxCpfCnpj = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
