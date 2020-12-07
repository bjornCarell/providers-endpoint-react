import styled, { css } from 'styled-components';

const baseStyle = css`
  color: ${props =>
    props.light
      ? ({ theme }) => theme.color.white
      : ({ theme }) => theme.color.black};
  font-weight: 600;
  margin-bottom: ${props => props.noMargin && '0'};
  margin-top: 0;
  max-width: 100%;
  text-align: ${props => {
    if (props.center) return 'center';
    if (props.right) return 'right';
    return 'start';
  }};
`;

export const HeadingOne = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.large};

  ${baseStyle};
`;
export const HeadingTwo = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  ${baseStyle};
`;
export const HeadingThree = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  ${baseStyle};
`;
export const HeadingFour = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  ${baseStyle};
`;
export const HeadingFive = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-bottom: ${({ theme }) => theme.spacing.xss};

  ${baseStyle};
`;
