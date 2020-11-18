/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../../components/Button';

describe('[COMPONENTS] Button', () => {
  it('Should make label exists in Button', () => {
    render(
      <Button label="any_label" />,
    );

    const label = screen.getByText(/any_label/i);
    expect(label).toBeInTheDocument();
  });
});
