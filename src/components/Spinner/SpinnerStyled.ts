import styled, { css, keyframes } from "styled-components";

export interface IStyledPropsSpinner {
  small?: boolean;
  medium?: boolean;
  big?: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerStyled = styled.div<IStyledPropsSpinner>`
  display: inline-block;
  animation: ${rotate} 1500ms linear infinite;

  ${({ small }) =>
    small &&
    css`
      width: 1.875rem;
      height: 1.875rem;
    `}

  ${({ medium }) =>
    medium &&
    css`
      width: 3.125rem;
      height: 3.125rem;
    `}

  ${({ big }) =>
    big &&
    css`
      width: 4.375rem;
      height: 4.375rem;
    `}

  & > svg {
    height: 100%;
    width: 100%;
  }
`;
