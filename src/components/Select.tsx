/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Container, LabelMessage } from '../styles/components/select';

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
      <select defaultValue={value} onChange={onChange}>
        {options?.map((option: any) => (
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
