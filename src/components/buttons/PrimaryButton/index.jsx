import styled from "styled-components";

export const PrimaryButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  transform: scale(1);
  transition: 300ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: scale(1.05);
  }
`;
