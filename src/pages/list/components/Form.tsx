import React, { FormEvent, useState } from 'react';

import { toast } from 'react-toastify';
import {
  BoxUfCity,
  Container,
  BoxCpfCnpj,
} from '../../../styles/pages/list/components/form';
import InputText from '../../../components/InputText';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Checkbox from '../../register/components/Checkbox';
import FormProps from '../../../types/FormProps';
import normalize from '../../../helpers/normalize';
import validateList from '../../../helpers/validateList';
import api from '../../../services/api';
import PeopleData from '../../../types/PeopleData';

const Form = ({
  type,
  setType,
  handleDocument,
  document,
  errors,
  uf,
  setUf,
  ufs,
  city,
  setCity,
  cities,
  setPeople,
}: FormProps) => {
  const [documentSelected, setDocumentSelected] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPeople({} as PeopleData);
    const documentNormalized = normalize(document);
    const validate = validateList(documentNormalized, city, uf, type);

    if (validate) {
      try {
        const response = await api.get('/contacts', {
          params: {
            type, document: documentNormalized, state: uf, city,
          },
        });

        setPeople(response.data);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <BoxCpfCnpj>
          <Checkbox
            value="cpf"
            checked={type === 'cpf'}
            onChange={(e) => setType(e.target.value)}
          />
          <Checkbox
            value="cnpj"
            checked={type === 'cnpj'}
            onChange={(e) => setType(e.target.value)}
          />
        </BoxCpfCnpj>
        <InputText
          isField={documentSelected}
          onSelect={() => setDocumentSelected(true)}
          onMouseLeave={() => !document && setDocumentSelected(false)}
          value={document}
          onChange={handleDocument}
          label={type === 'cpf' ? 'CPF' : 'CNPJ'}
          error={errors?.document}
        />
        <BoxUfCity>
          <Select
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            label="UF"
            options={ufs}
          />
          <Select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="Cidade"
            options={cities.cities}
          />
        </BoxUfCity>
        <Button label="Pesquisar" />
      </form>
    </Container>
  );
};
export default Form;
