import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen, fireEvent } from '@testing-library/react';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} name="Name" id="name" placeholder="enter your name" />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input with Button', () => {
  it('Renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });

  it('Propery handles value change', () => {
    render(<InputWithButton />);
    const input = screen.getByPlaceholderText('enter your name');
    fireEvent.change(input, { target: { value: 'dawid' } });
    expect(input).toHaveValue('dawid');
  });

  it('Button is disabled ?', () => {
    render(<InputWithButton />);
    const button = screen.getByText('Submit');
    expect(button).toBeDisabled();
    const input = screen.getByPlaceholderText('enter your name');
    fireEvent.change(input, { target: { value: 'dawid' } });
    expect(button).not.toBeDisabled();
  });
});
