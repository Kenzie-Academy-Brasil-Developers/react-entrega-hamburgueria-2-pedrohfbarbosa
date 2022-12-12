import styled, { css } from "styled-components";

import { Button } from "./components/Button";
import { theme } from "./themes";

export const ButtonStyled = styled(Button)`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.border.radius1};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size5};

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};

  background-color: ${({ theme, bg }) =>
    bg ? theme.colors[bg] : theme.colors.primary};

  height: ${({ height }) => (height === "medium" ? "2.5rem" : "3.75rem")};

  width: ${({ width }) => (width ? width : "fit-content")};

  ${({ position }) =>
    position &&
    css`
      position: absolute;
      right: 0.5rem;
    `};

  &:hover {
    opacity: 0.7;
  }

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${({ bgHover }) =>
          bgHover ? theme.colors[bgHover] : theme.colors.primary};
        color: ${({ colorHover }) =>
          colorHover ? theme.colors[colorHover] : theme.colors.white};
        opacity: 1;
      }
    `}
`;
