/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('[COMPONENTS] Header', () => {
  it('Should make links exists', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const link = screen.getByText(/Criar Pessoa/i);
    expect(link).toBeInTheDocument();
  });
});
