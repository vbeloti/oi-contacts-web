/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { Dispatch } from 'react';
import { toast } from 'react-toastify';
import cpfMask from '../../../helpers/cpfMask';
import cnpjMask from '../../../helpers/cnpjMask';
import api from '../../../services/api';

import {
  Container,
  ContainerPeoples,
  BoxEditDelete,
  TextNotPeoples,
} from '../../../styles/pages/manager/components/people';
import PeopleData from '../../../types/PeopleData';

type PeopleProps = {
  peoples: PeopleData[];
  setPeoples: Dispatch<React.SetStateAction<PeopleData[]>>;
  handleModal: (index: number) => void;
  isLoading: boolean;
  filterResults: (peopleR: PeopleData) => boolean;
};

const People = ({
  peoples, setPeoples, handleModal, isLoading, filterResults,
}: PeopleProps) => {
  const handleDelete = async (id: string) => {
    try {
      const result = await api.delete(`/contacts/${id}`);
      if (result.status === 200) {
        const dataAlphabetical = peoples.sort((a, b) => {
          if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) return -1;
          if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) return 1;
          return 0;
        });
        setPeoples(dataAlphabetical.filter((peopleFilter) => peopleFilter._id !== id));
        toast.success('Apagado com sucesso!!!');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Container>
      <header>
        <h2>Tipo</h2>
        <h2>Nome/Razão Social</h2>
        <h2>CPF/CNPJ</h2>
        <h2>Telefone</h2>
        <h2>Cidade</h2>
        <h2>Ações</h2>
      </header>
      <ContainerPeoples>
        {peoples?.filter(filterResults)
          ?.map((people, index) => (
            <div key={people?._id}>
              <h4>{people?.type.toUpperCase()}</h4>
              <h4>{people?.name}</h4>
              <h4>{people?.type === 'cpf' ? cpfMask(people?.document) : cnpjMask(people?.document)}</h4>
              <h4>{people?.phone}</h4>
              <h4>{people?.city}</h4>
              <BoxEditDelete>
                <button onClick={() => handleModal(index)} type="submit">Editar</button>
                <button onClick={() => handleDelete(people?._id)} type="submit">Apagar</button>
              </BoxEditDelete>
            </div>
          ))}
        {!isLoading && !peoples.length && (
          <TextNotPeoples>Não existem mais pessoas para exibir</TextNotPeoples>
        )}
      </ContainerPeoples>
    </Container>
  );
};

export default People;
