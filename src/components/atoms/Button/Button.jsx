import styled from 'styled-components';

const Button = styled.button`
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '8px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  margin: 10px 0;
  cursor: pointer;
`;

export default Button;
