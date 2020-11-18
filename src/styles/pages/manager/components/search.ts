import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  margin: 1rem auto;
`;

export const BoxRegister = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #00ab0f;
  }

  h2 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

`;

export const BoxSearch = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;

  input {
    width: 100%;
    height: 3rem;
    border: 0;
    border: 1px solid #ccc;
    border-radius: 2rem;
    padding-left: 1rem;
  }

  button {
    position: absolute;
    right: 10px;
    top: 15px;
    border: 0;
    background-color: transparent;
    font-weight: bold;
  }
`;
