import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#396a2e"}; /* Changed from #2e186a */
  color: ${(p) => (p.color ? "#396a2e" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(57 106 46 / 20%); /* Adjusted box shadow color */

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #76b757; /* A lighter green highlight */
    background-color: #76b757; /* Hover color */
  }
`;
