import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const ContainerAsideContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
`;
