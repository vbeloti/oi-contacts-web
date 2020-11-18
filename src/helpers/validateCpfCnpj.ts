import React from 'react';
import cnpjValidate from './cnpjValidate';
import cpfValidate from './cpfValidate';

type validatecpfCnpjProps = {
  type: string;
  doc: string;
  setErrors: (value: React.SetStateAction<{ document: string; phone: string; }>) => void;
  errors: {
    document: string;
    phone: string;
  }
}

const validatecpfCnpj = ({
  type, doc, setErrors, errors,
} :validatecpfCnpjProps) => {
  if (type === 'cpf') {
    if (doc.length === 11) {
      const cpfValid = cpfValidate(doc);
      if (!cpfValid) {
        setErrors({ ...errors, document: 'CPF Inválido' });
      }
    }
  } else if (doc.length === 14) {
    const cnpjValid = cnpjValidate(doc);
    if (!cnpjValid) {
      setErrors({ ...errors, document: 'CNPJ Inválido' });
    }
  }
};

export default validatecpfCnpj;
