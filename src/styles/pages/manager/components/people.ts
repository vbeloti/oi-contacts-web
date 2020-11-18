import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 1rem auto;

  header {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background-color: #fafafa;
    text-align: center;
    font-size: 0.7rem;
    margin: 0 1rem;
  }

  h2 {
    border-bottom: 1px solid #00ab0f;
    margin: 0 0.5rem;
    border-radius: 0.3rem;
  }

  h2:hover {
    border-color: lightgrey;
  }

  button {
    cursor: pointer;
    border: 0;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem;
    font-weight: bold;
    border-radius: 1rem;
  }

  @media (max-width: 850px) {
    header {
      display: flex;
      flex-direction: column;
    }

    h2 {
      margin: 0.5rem 0;
    }
  }

  }
`;

export const ContainerPeoples = styled.div`
  margin-top: 1rem;

  div {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 850px) {
    div {
      display: flex;
      flex-direction: column;
    }

    h4 {
      margin: 0.5rem 0;
    }
  }
`;

export const BoxEditDelete = styled.div``;

export const TextNotPeoples = styled.h2`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
