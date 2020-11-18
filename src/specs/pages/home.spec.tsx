/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';

describe('[PAGE] Home', () => {
  it('Should make links exists', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const link = screen.getByText(/Criar Pessoa/i);
    expect(link).toBeInTheDocument();
  });
});
