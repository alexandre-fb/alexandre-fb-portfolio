import styled from "styled-components";

export const PrimaryButton = styled.button`
  background: none;
  border: 1px solid var(--light-green);
  border-radius: 40px;
  padding: 10px 20px;
  color: var(--light-green);
  transition: 300ms ease-in-out;
  transform: scale(1);
  cursor: pointer;

  &:hover {
    background-color: var(--light-green);
    color: var(--very-dark-purple);
    transform: scale(1.05);
  }
`;
