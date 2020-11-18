/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import cpfMask from '../../../helpers/cpfMask';
import phoneMask from '../../../helpers/phoneMask';

import { Container } from '../../../styles/pages/register/components/form';
import Button from '../../../components/Button';
import Checkbox from './Checkbox';
import InputDate from './InputDate';
import InputText from '../../../components/InputText';
import Select from '../../../components/Select';
import api from '../../../services/api';
import UfData from '../../../types/UfData';
import normalize from '../../../helpers/normalize';
import validateRegister from '../../../helpers/validateRegister';
import validatecpfCnpj from '../../../helpers/validateCpfCnpj';
import CityData from '../../../types/CityData';
import cnpjMask from '../../../helpers/cnpjMask';

const Form = () => {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('cpf');
  const [errors, setErrors] = useState({ document: '', phone: '' });
  const [ufs, setUfs] = useState<UfData[]>([]);
  const [cities, setCities] = useState<CityData>({} as CityData);
  const [birthday, setBirthday] = useState(new Date());

  const [nameSelected, setNameSelected] = useState(false);
  const [documentSelected, setDocumentSelected] = useState(false);
  const [phoneSelected, setPhoneSelected] = useState(false);

  const history = useHistory();

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const documentNormalized = normalize(document);

    const validate = validateRegister({
      documentNormalized, phone, name, city, uf, birthday, type,
    });

    if (validate) {
      try {
        const result = await api.post('/contacts', {
          document: documentNormalized, phone, name, city, state: uf, birthday, type,
        });
        if (result?.status === 200) {
          toast.success('Dados cadastrados com sucesso');
          history.push('/peoples');
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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

        <InputText
          isField={nameSelected}
          onSelect={() => setNameSelected(true)}
          onMouseLeave={() => !name && setNameSelected(false)}
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={type === 'cpf' ? 'Informe o Nome' : 'Informe a Razão Social'}
        />

        <InputText
          isField={documentSelected}
          onSelect={() => setDocumentSelected(true)}
          onMouseLeave={() => !document && setDocumentSelected(false)}
          value={document}
          onChange={handleDocument}
          label={type === 'cpf' ? 'CPF' : 'CNPJ'}
          error={errors?.document}
        />

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

        <InputText
          isField={phoneSelected}
          onSelect={() => setPhoneSelected(true)}
          onMouseLeave={() => !phone && setPhoneSelected(false)}
          onChange={(e) => setPhone(phoneMask(e.target.value))}
          value={phone}
          label="Telefone"
        />

        <InputDate
          onChange={(date) => setBirthday(date)}
          selected={birthday}
          label="Data de Nascimento"
        />
        <Button label="Cadastrar" />
      </form>
    </Container>
  );
};

export default Form;
