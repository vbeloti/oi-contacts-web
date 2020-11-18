/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';
import Select from '../../../components/Select';
import cnpjMask from '../../../helpers/cnpjMask';
import cpfMask from '../../../helpers/cpfMask';
import normalize from '../../../helpers/normalize';
import phoneMask from '../../../helpers/phoneMask';
import validatecpfCnpj from '../../../helpers/validateCpfCnpj';
import validateRegister from '../../../helpers/validateRegister';
import api from '../../../services/api';
import {
  Container,
  ModalContent,
  CloseButton,
  BoxCheckbox,
} from '../../../styles/pages/manager/components/modal';
import CityData from '../../../types/CityData';
import ModalProps from '../../../types/ModalProps';
import UfData from '../../../types/UfData';
import Checkbox from '../../register/components/Checkbox';

const Modal = ({
  showModal,
  people,
  setShowModal,
  peoples,
  setPeoples,
}: ModalProps) => {
  if (!people) return null;

  const [name, setName] = useState(people.name);
  const [document, setDocument] = useState(people.document);
  const [phone, setPhone] = useState(people.phone);
  const [uf, setUf] = useState(people.state);
  const [city, setCity] = useState(people.city);
  const [type, setType] = useState(people.type);
  const [errors, setErrors] = useState({ document: '', phone: '' });
  const [ufs, setUfs] = useState<UfData[]>([]);
  const [cities, setCities] = useState<CityData>({} as CityData);

  useEffect(() => {
    setName(people.name);
    setDocument(people.document);
    setPhone(people.phone);
    setUf(people.state);
    setCity(people.city);
    setType(people.type);
  }, [people]);

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
      type,
      doc,
      setErrors,
      errors,
    });

    setDocument(type === 'cpf' ? cpfMask(doc) : cnpjMask(doc));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const documentNormalized = normalize(document);

    const validate = validateRegister(
      {
        documentNormalized,
        phone,
        name,
        city,
        uf,
        type,
      },
      false,
    );

    if (validate) {
      try {
        const peopleData = {
          document: documentNormalized,
          phone,
          name,
          city,
          state: uf,
          type,
        };
        const result = await api.put(`/contacts/${people._id}`, peopleData);
        if (result?.status === 200) {
          setShowModal(false);
          const indexPeople = peoples.findIndex(
            (peopleIndex) => peopleIndex._id === people._id,
          );

          const newPeople = Object.assign(peopleData, {
            _id: people._id,
            birthday: people.birthday,
            created_at: people.created_at,
          });

          peoples[indexPeople] = newPeople;

          setPeoples([...peoples]);
          toast.success('Dados Atualizaddos com sucesso');
        }
      } catch (error) {
        toast.error(error?.response?.message);
      }
    }
  };

  if (!showModal) return null;

  return (
    <Container>
      <ModalContent>
        <CloseButton type="submit" onClick={() => setShowModal(false)}>
          X
        </CloseButton>
        <div>
          <form onSubmit={handleSubmit}>
            <BoxCheckbox>
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
            </BoxCheckbox>

            <InputText
              isField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label={
                type === 'cpf' ? 'Informe o Nome' : 'Informe a Razão Social'
              }
            />

            <InputText
              isField
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
              options={cities?.cities}
            />

            <InputText
              isField
              onChange={(e) => setPhone(phoneMask(e.target.value))}
              value={phone}
              label="Telefone"
            />

            <Button label="Atualizar" />
          </form>
        </div>
      </ModalContent>
    </Container>
  );
};

export default Modal;
