import styled from "styled-components";

export const HeadingOne = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size1};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray100};
`;

export const HeadingTwo = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size2};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray100};
`;

export const HeadingThree = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size3};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray100};
`;

export const HeadingFour = styled.h4`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size5};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray100};
`;

export const Text = styled.span`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};

  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.font[fontSize] : theme.font.size4};

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray100};
`;
