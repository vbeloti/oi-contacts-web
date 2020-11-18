import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper, Nav, List, Item,
} from '../styles/components/header';

const Header = () => (
  <Wrapper>
    <Nav>
      <List>
        <Item><Link to="/create">Criar Pessoa</Link></Item>
        <Item><Link to="/peoples">Gerenciar Pessoas</Link></Item>
        <Item><Link to="/list">Lista de Telefone</Link></Item>
      </List>
    </Nav>
  </Wrapper>
);

export default Header;
