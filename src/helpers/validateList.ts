import { toast } from 'react-toastify';
import cnpjValidate from './cnpjValidate';
import cpfValidate from './cpfValidate';

const validateList = (
  documentNormalized: string,
  city: string,
  uf: string,
  type: string,
) => {
  let error = false;
  if (type === 'cpf' && !cpfValidate(documentNormalized)) {
    error = true;
    toast.error('CPF Inválidos');
  }
  if (type === 'cnpj' && !cnpjValidate(documentNormalized)) {
    error = true;
    toast.error('CNPJ Inválidos');
  }
  if (!city) {
    error = true;
    toast.error('Cidade Inválido');
  }
  if (!uf) {
    error = true;
    toast.error('UF Inválido');
  }
  if (!error) return true;
  return false;
};

export default validateList;
