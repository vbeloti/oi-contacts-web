/* eslint-disable max-len */
import React from 'react';
import {
  fireEvent, getByPlaceholderText, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Form from '../../../pages/list/components/Form';

describe('[COMPONENT] Form', () => {
  it('Should make links exists', () => {
    render(
      <BrowserRouter>
        <Form
          type="any_type"
          setType={() => {}}
          handleDocument={() => {}}
          document="any_document"
          errors={{ document: '', phone: '' }}
          uf="any_uf"
          setUf={() => {}}
          ufs={[{ uf_name: 'any_uf', _id: 'any_id' }]}
          city="any_city"
          setCity={() => {}}
          cities={{ cities: [{ _id: 'any_id', city_name: 'any_city' }], _id: 'any_id' }}
          setPeople={() => {}}
        />
      </BrowserRouter>,
    );

    const select = screen.getAllByRole('textbox');
    expect(select).toBeTruthy();
  });

  it('Should make submit send', () => {
    render(
      <BrowserRouter>
        <Form
          type="any_type"
          setType={() => {}}
          handleDocument={() => {}}
          document="any_document"
          errors={{ document: '', phone: '' }}
          uf="any_uf"
          setUf={() => {}}
          ufs={[{ uf_name: 'any_uf', _id: 'any_id' }]}
          city="any_city"
          setCity={() => {}}
          cities={{ cities: [{ _id: 'any_id', city_name: 'any_city' }], _id: 'any_id' }}
          setPeople={() => {}}
        />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText(/Pesquisar/));
    expect(screen.getByText('Pesquisar')).toBeInTheDocument();
  });

  it('Should make values is send', () => {
    render(
      <BrowserRouter>
        <Form
          type="any_type"
          setType={() => {}}
          handleDocument={() => {}}
          document="any_document"
          errors={{ document: '', phone: '' }}
          uf="any_uf"
          setUf={() => {}}
          ufs={[{ uf_name: 'any_uf', _id: 'any_id' }]}
          city="any_city"
          setCity={() => {}}
          cities={{ cities: [{ _id: 'any_id', city_name: 'any_city' }], _id: 'any_id' }}
          setPeople={() => {}}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('Pesquisar')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('CPF'), { target: { value: '49673553076' } });
    fireEvent.click(screen.getByText(/Pesquisar/));
  });
});
