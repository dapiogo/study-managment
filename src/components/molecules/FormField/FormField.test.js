import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Input with Button', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="Name" id="name" name="name" />);

    // screen.getByText('Submit');
  });
});
