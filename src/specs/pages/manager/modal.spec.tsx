/* eslint-disable max-len */
import React from 'react';
import {
  act,
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../../../pages/manager/components/Modal';

describe('[COMPONENT] Modal', () => {
  it('Should make modal exists', () => {
    const people = {
      _id: 'id',
      name: 'name',
      type: 'type',
      document: 'document',
      state: 'state',
      city: 'city',
      birthday: 'birthday',
      phone: 'phone',
      created_at: 'created_at',
    };

    act(() => {
      render(
        <Modal setShowModal={() => {}} setPeoples={() => {}} peoples={[people]} people={people} showModal />,
      );
    });

    const name = screen.getByText('Atualizar');
    expect(name).toBeTruthy();
  });
});
