import styled from "styled-components";
import { BsSunFill } from "react-icons/bs";
export const ThemeButton = () => {
  return (
    <Button>
      <BsSunFill />
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transform: scale(1);
  transition: all 300ms;

  :hover {
    transform: scale(0.95);
  }

  svg {
    color: var(--yellow);
    font-size: 1.7rem;
  }
`;
