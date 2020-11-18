import React, { ChangeEvent } from 'react';

type CheckboxProps = {
  value: string;
  checked?: boolean | undefined;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined
};

const Checkbox = ({ value, checked, onChange }: CheckboxProps) => (
  <label>
    <input
      type="checkbox"
      value={value}
      checked={!!checked}
      onChange={onChange}
    />
    <span>{value === 'cpf' ? 'CPF' : 'CNPJ'}</span>
  </label>
);

export default Checkbox;
