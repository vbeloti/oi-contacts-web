import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 2.5rem;
    border: 0;
    border-bottom: 1px solid #909090;
    color: #909090;
    font-size: 1rem;
    font-weight: bold;
  }
`;

type LabelMessageProps = {
  isField?: boolean;
}

export const LabelMessage = styled.span<LabelMessageProps>`
  position: absolute;
  color: #909090;
  font-size: 1rem;
  top: 7px;
  transition: top 300ms ease-in-out;
  left: 0;
  cursor: text;

  ${(props) => props.isField && css`
    & {
      top: -15px;
      color: #00ab0f;
    }

  `}
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: -5px;
  right: 0;
  color: red;
  background-color: #fafafa;
  border-radius: 2rem;
  border: 1px solid #909090;
  padding: 0.2rem 1rem;
`;
