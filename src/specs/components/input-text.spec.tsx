/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputText from '../../components/InputText';

describe('[COMPONENTS] InputText', () => {
  it('Should make label exists in InputText', () => {
    render(
      <InputText label="any_label" />,
    );

    const label = screen.getByText(/any_label/i);
    expect(label).toBeInTheDocument();
  });

  it('Should make error exists in InputText', () => {
    render(
      <InputText error="any_error" />,
    );

    const error = screen.getByText(/any_error/i);
    expect(error).toBeInTheDocument();
  });
});
