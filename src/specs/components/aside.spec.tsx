/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Aside from '../../components/Aside';

describe('[COMPONENTS] Header', () => {
  it('Should make links exists', () => {
    render(
      <Aside phrase="any_phrase" title="any_tiel" />,
    );

    const phrase = screen.getByText(/any_phrase/i);
    expect(phrase).toBeInTheDocument();
  });
});
