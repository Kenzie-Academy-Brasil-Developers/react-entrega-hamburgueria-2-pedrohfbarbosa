import styled from "styled-components";

export const HeaderStyled = styled.header`
  min-height: 5rem;
  background-color: ${({ theme }) => theme.colors.gray0};
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div > div {
    width: 100%;
    max-width: 25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 56.25rem) {
    & > div {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }

    & > div > div {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
  }

  }
`;

export const ButtonHeader = styled.button`
  background-color: transparent;
  border: none;

  height: 3.75rem;
  width: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({theme}) => theme.border.radius1};

  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.gray20};
  }

  & > svg {
    height: 50%;
    width: 50%;
  }
`