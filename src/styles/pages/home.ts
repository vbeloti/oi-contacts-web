import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
`;

export const BoxHome = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  max-height: 300px;
`;

export const Card = styled.div`
  border-radius: 1rem;
  margin: 1rem;
  background-color: white;
  box-shadow: 0 5px 15px 0 rgba(2,2,2,0.15);

  a {
    text-decoration: none;
    color: #333333;
    text-align: center;
  }
`;
