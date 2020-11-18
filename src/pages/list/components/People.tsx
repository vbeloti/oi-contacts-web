/* eslint-disable no-underscore-dangle */
import React from 'react';
import cnpjMask from '../../../helpers/cnpjMask';
import cpfMask from '../../../helpers/cpfMask';

import {
  Container,
  Name,
  Document,
  Uf,
  City,
  Phone,
} from '../../../styles/pages/list/components/people';
import PeopleData from '../../../types/PeopleData';

type PeopleProps = {
  people: PeopleData;
};

const People = ({ people }: PeopleProps) => (
  <Container>
    {people?._id ? (
      <>
        <Name>
          <span>
            {people?.type === 'cpf' ? 'Nome:' : 'Razão Social:' }
          </span>
          <h2>{people?.name}</h2>
        </Name>
        <Document>
          <span>{people?.type === 'cpf' ? 'CPF:' : 'CNPJ:' }</span>
          <h2>{people?.type === 'cpf' ? cpfMask(people?.document) : cnpjMask(people?.document)}</h2>
        </Document>
        <Uf>
          <span>UF</span>
          <h2>{people?.state}</h2>
        </Uf>
        <City>
          <span>Cidade</span>
          <h2>{people?.city}</h2>
        </City>
        <Phone>
          <span>Telefone</span>
          <h2>{people?.phone}</h2>
        </Phone>
      </>
    ) : (
      <h2>Não existe resultado</h2>
    )}
  </Container>
);

export default People;
