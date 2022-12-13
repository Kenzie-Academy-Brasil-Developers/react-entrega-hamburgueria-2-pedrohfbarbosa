import styled from "styled-components";

export const CartStyled = styled.aside`
  width: 100%;
  max-width: 22.6875rem;

  @media (max-width: 56.25rem) {
    max-width: 40.625rem;
  }
`;

export const CartTitle = styled.div`
  height: 4.0625rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
`;

export const EmptyCart = styled.div`
  height: 9.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.gray0};
`;

export const CartProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 20.1875rem;
  overflow-y: auto;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray20};
  padding: 1.25rem 0.625rem;
  background-color: ${({ theme }) => theme.colors.gray0};
`;
