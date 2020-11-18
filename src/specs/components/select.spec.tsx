/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputText from '../../components/InputText';
import Select from '../../components/Select';

describe('[COMPONENTS] Select', () => {
  it('Should make label exists in Select', () => {
    render(
      <Select label="any_label" value="any_value" />,
    );

    const label = screen.getByText(/any_label/i);
    expect(label).toBeInTheDocument();
  });

  it('Should make uf options exists in Select', () => {
    const options = [{
      uf_name: 'any_uf',
      _id: 'any_id',
    }];
    render(
      <Select label="any_label" options={options} value="any_value" />,
    );

    const uf = screen.getByText(/any_uf/i);
    expect(uf).toBeInTheDocument();
  });

  it('Should make city options exists in Select', () => {
    const options = [{
      city_name: 'any_city',
      _id: 'any_id',
    }];
    render(
      <Select label="any_label" options={options} value="any_value" />,
    );

    const city = screen.getByText(/any_city/i);
    expect(city).toBeInTheDocument();
  });
});
