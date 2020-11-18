import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 100%;
  max-height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 2rem;
  border: 1px solid #ccc;
`;

export const ModalContent = styled.div`
  display: flex;
  height: 100%;

  div {
    height: 100%;
    width: 100%;
  }

  form {
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: -20px;
    right: -20px;
    border: 0;
    border: 1px solid #ccc;
    background-color: white;
    color: #00ab0f;
    width: 50px;
    border-radius: 0.5rem;
    font-size: 2.3rem;

`;

export const BoxCheckbox = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
