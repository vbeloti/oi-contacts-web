/* eslint-disable import/no-duplicates */
import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { subYears } from 'date-fns';
import { Container, LabelMessage } from '../../../styles/components/input-date';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', ptBR);

type InputDateProps = {
  label?: string;
  onChange(date: Date): void;
  selected?: Date | null | undefined;
}

const InputDate = ({ label, onChange, selected }: InputDateProps) => (
  <Container>
    <label>
      <LabelMessage>{label}</LabelMessage>
      <DatePicker
        onChange={onChange}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        selected={selected}
        minDate={subYears(new Date(), 100)}
        maxDate={new Date()}
      />
    </label>
  </Container>
);

export default InputDate;
