import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import { Container, ContainerAsideContent } from '../styles/pages/register';
import Form from './register/components/Form';

const Register = () => (
  <>
    <Container>
      <Aside title="Cadastro" phrase="Cadastrar contatos na" />
      <ContainerAsideContent>
        <Header />
        <Form />
      </ContainerAsideContent>
    </Container>
  </>

);

export default Register;
