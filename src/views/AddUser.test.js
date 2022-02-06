import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashborad';

describe('Input with Button', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    //wpisywanie wartosci w inputa
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Korczak' } });

    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '44%' } });

    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });

    //pobieranie buttona
    fireEvent.click(screen.getByText('add'));
    screen.getByText('Korczak');
  });
});
