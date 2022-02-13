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
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'atomek' } });

    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '44%' } });

    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.change(screen.getByTestId('Consent'));

    //pobieranie buttona
    fireEvent.click(screen.getByText('add'));
    screen.queryByText('dawid');
  });

  it('prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    //wpisywanie wartosci w inputa
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'atomek' } });

    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '44%' } });

    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('add'));

    const newUser = screen.queryByText('atomek');
    expect(newUser).not.toBeInTheDocument();
  });
});
