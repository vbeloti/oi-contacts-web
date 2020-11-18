import React from 'react';
import { Container, LabelMessage } from '../styles/components/select';

type Options = {
  _id: string;
  city_name: string;
  uf_name: string;
}

type SelectProps = {
  label: string;
  options?: any;
  onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void);
  value: string;
}

const Select = ({
  label, options, onChange, value,
}: SelectProps) => (
  <Container>
    <label>
      <LabelMessage>{label}</LabelMessage>
      <select value={value} onChange={onChange}>
        <option value="">Selecione</option>
        {options?.map((option: Options) => (
          <option
            key={option._id}
            value={option.uf_name || option.city_name}
          >
            {option.uf_name || option.city_name}

          </option>
        ))}
      </select>
    </label>
  </Container>
);

export default Select;
