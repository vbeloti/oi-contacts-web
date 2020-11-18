/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import List from '../../pages/List';

describe('[PAGE] List', () => {
  it('Should make list exists', () => {
    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>,
    );

    const list = screen.getByText(/Lista Pública de Telefones/i);
    expect(list).toBeInTheDocument();
  });
});
