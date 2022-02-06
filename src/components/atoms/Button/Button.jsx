import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  margin: 10px 0;
  cursor: pointer;
`;

export default Button;
