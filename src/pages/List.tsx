import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import cnpjMask from '../helpers/cnpjMask';
import cpfMask from '../helpers/cpfMask';
import normalize from '../helpers/normalize';
import validatecpfCnpj from '../helpers/validateCpfCnpj';
import api from '../services/api';
import { Container, ContainerHeaderForm, ContainerFormPeople } from '../styles/pages/list';
import CityData from '../types/CityData';
import PeopleData from '../types/PeopleData';
import UfData from '../types/UfData';
import Form from './list/components/Form';
import People from './list/components/People';

const List = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [document, setDocument] = useState('');
  const [type, setType] = useState('cpf');
  const [people, setPeople] = useState<PeopleData>({} as PeopleData);

  const [ufs, setUfs] = useState<UfData[]>([]);
  const [cities, setCities] = useState<CityData>({} as CityData);

  const [errors, setErrors] = useState({ document: '', phone: '' });
  useEffect(() => {
    if (uf) {
      api.get(`/ufs/${uf}`).then((response) => setCities(response.data));
    }
  }, [uf]);

  useEffect(() => {
    api.get('/ufs').then((response) => setUfs(response.data));
  }, []);

  const handleDocument = (event: ChangeEvent<HTMLInputElement>) => {
    setErrors({ document: '', phone: '' });
    const doc = normalize(event.target.value);
    validatecpfCnpj({
      type, doc, setErrors, errors,
    });
    setDocument(type === 'cpf' ? cpfMask(doc) : cnpjMask(doc));
  };

  return (
    <>
      <Container>
        <Aside title="– Lista Pública de Telefones" phrase="Encontre contatos da " />
        <ContainerHeaderForm>
          <Header />
          <ContainerFormPeople>
            <Form
              setPeople={setPeople}
              type={type}
              setType={setType}
              handleDocument={handleDocument}
              document={document}
              errors={errors}
              uf={uf}
              setUf={setUf}
              ufs={ufs}
              city={city}
              setCity={setCity}
              cities={cities}
            />
            <People people={people} />
          </ContainerFormPeople>
        </ContainerHeaderForm>
      </Container>
    </>
  );
};

export default List;
