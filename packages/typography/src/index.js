import styled, { css } from "styled-components";

const fontFamily = "'Montserrat', sans-serif";
const fontWeights = {
  light: 300,
  regular: 400,
  bold: 600
};

const baseStyles = css`
font-family ${fontFamily};
margin: 0;
padding: 0; 
-webkit-font-smoothing: antialiased;
font-weight: ${({ fontWeight }) =>
  fontWeights[fontWeight] || fontWeights.regular}; 
`;

export const H1 = styled.h1`
  ${baseStyles};
  font-size: 62px;
  letter-spacing: -3px;
  line-height: 62px;
`;
export const H2 = styled.h2`
  ${baseStyles};
  font-size: 46px;
  letter-spacing: -3px;
  line-height: 46px;
`;
export const H3 = styled.h3`
  ${baseStyles};
  font-size: 30px;
  letter-spacing: -2px;
  line-height: 30px;
`;
export const H4 = styled.h4`
  ${baseStyles};
  font-size: 24px;
  letter-spacing: -1.5px;
  line-height: 24px;
`;
export const H5 = styled.h5`
  ${baseStyles};
  font-size: 20px;
  letter-spacing: -1px;
  line-height: 20px;
`;
export const H6 = styled.h6`
  ${baseStyles};
  font-size: 18px;
  letter-spacing: 0;
  line-height: 18px;
`;
export const Text = styled.p`
  ${baseStyles};
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
`;

export const SmallText = styled.small`
  ${baseStyles};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 12px;
`;
