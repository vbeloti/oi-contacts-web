import React from 'react';
import { Link } from 'react-router-dom';
import Aside from '../components/Aside';
import { Container, BoxHome, Card } from '../styles/pages/home';
import user from '../assets/user.svg';
import users from '../assets/users.svg';
import phone from '../assets/phone.svg';

const Home = () => (
  <Container>
    <Aside title="Serviços" phrase="Serviços disponíveis" />
    <BoxHome>
      <Card>
        <Link to="/create"><img src={user} alt="User logo" /></Link>
        <Link to="/create"><h2>Criar Pessoa</h2></Link>
      </Card>
      <Card>
        <Link to="/create"><img src={users} alt="Users logo" /></Link>
        <Link to="/create"><h2>Gerenciar Pessoas</h2></Link>
      </Card>
      <Card>
        <Link to="/create"><img src={phone} alt="Phone logo" /></Link>
        <Link to="/create"><h2>Lista de Telefone</h2></Link>
      </Card>
    </BoxHome>
  </Container>

);

export default Home;
