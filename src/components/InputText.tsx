import React, { ChangeEvent } from 'react';
import { Container, LabelMessage, ErrorMessage } from '../styles/components/input-text';

type FieldsetCheckboxProps = {
  onSelect?: ((event: React.SyntheticEvent<HTMLInputElement, Event>) => void) | undefined;
  onMouseLeave?: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
  value?: string;
  label?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  error?: string;
  isField?: boolean;
}

const InputText = ({
  onSelect, onMouseLeave, onChange, value, label, error, isField,
}: FieldsetCheckboxProps) => (
  <Container>
    <label>
      <input
        required
        onSelect={onSelect}
        onMouseLeave={onMouseLeave}
        value={value}
        onChange={onChange}
      />
      <LabelMessage isField={isField}>{label}</LabelMessage>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </label>
  </Container>
);

export default InputText;
