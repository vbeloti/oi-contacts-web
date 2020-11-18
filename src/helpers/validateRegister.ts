import { toast } from 'react-toastify';
import cnpjValidate from './cnpjValidate';
import cpfValidate from './cpfValidate';
import normalize from './normalize';

type validateRegisterProps = {
  documentNormalized: string,
  phone: string,
  name: string,
  city: string,
  uf: string,
  birthday?: Date,
  type: string,
}

const validateRegister = ({
  documentNormalized,
  phone,
  name,
  city,
  uf,
  birthday,
  type,
}: validateRegisterProps, birth = true) => {
  let error = false;
  if (type === 'cpf' && !cpfValidate(documentNormalized)) {
    error = true;
    toast.error('CPF Inválidos');
  }
  if (type === 'cnpj' && !cnpjValidate(documentNormalized)) {
    error = true;
    toast.error('CNPJ Inválidos');
  }

  console.log(normalize(phone).length);
  if (normalize(phone).length > 12 || normalize(phone).length < 11) {
    error = true;
    toast.error('Número de telefone Inválido');
  }
  if (!name) {
    error = true;
    toast.error('Nome Inválido');
  }
  if (!city) {
    error = true;
    toast.error('Cidade Inválido');
  }
  if (!uf) {
    error = true;
    toast.error('UF Inválido');
  }
  if (birth && !birthday) {
    error = true;
    toast.error('Data de Nascimento Inválido');
  }

  if (!error) return true;
  return false;
};

export default validateRegister;
