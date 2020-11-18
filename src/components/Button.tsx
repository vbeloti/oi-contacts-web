import React from 'react';
import { Container } from '../styles/components/button';

type ButtonProps = {
  label: string;
}

const Button = ({ label }: ButtonProps) => (
  <Container>
    <button type="submit">{label}</button>
  </Container>
);

export default Button;
