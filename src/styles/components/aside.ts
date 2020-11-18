import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.2;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #00ab0f;
  background-image: linear-gradient(28deg,#a7d507 -9%,#227819 99%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;


  @media (max-width: 850px) {
    flex: 1;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxInfo = styled.div`
  max-width: 240px;

  p {
    font-size: 1.5rem;
  }

  span {
    font-weight: bold;
  }

`;
