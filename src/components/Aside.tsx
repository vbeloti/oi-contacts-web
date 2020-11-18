import React from 'react';

import { Container, BoxLogo, BoxInfo } from '../styles/components/aside';

import logo from '../assets/logo.svg';

type AsideProps = {
  title: string;
  phrase: string;
};

const Aside = ({ title, phrase }: AsideProps) => (
  <Container>
    <BoxLogo>
      <img src={logo} alt="Logo Oi" />
      <h2>
        Oi
        {' '}
        {title}
      </h2>
    </BoxLogo>
    <BoxInfo>
      <p>
        {phrase}
        {' '}
        <span>Oi</span>
        .
      </p>
    </BoxInfo>
  </Container>
);

export default Aside;
