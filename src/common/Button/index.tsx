import { StyledButton } from "./styles";
import { ButtonProps } from "../types";
import { useHistory } from "react-router-dom";

export const Button = ({ color, children, onClick, to }: ButtonProps) => {
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (to) {
      history.push(to);
    }
  };

  return (
    <StyledButton color={color} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};
