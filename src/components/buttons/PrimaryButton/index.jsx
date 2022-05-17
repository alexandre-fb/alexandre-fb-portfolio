import styled from "styled-components";

export const PrimaryButton = styled.button`
  background: none;
  border: 1px solid var(--light-green);
  padding: 10px 20px;
  border-radius: 40px;
  color: var(--light-green);

  cursor: pointer;

  transform: scale(1);
  transition: 300ms ease-in-out;

  &:hover {
    background-color: var(--light-green);
    color: var(--very-dark-purple);
    transform: scale(1.05);
  }
`;
