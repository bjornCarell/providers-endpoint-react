import styled from 'styled-components';

export const SelectStyled = styled.select.attrs(({ width }) => ({
  width: width || '100%'
}))`
  appearance: none;
  background: ${props =>
    props.inverse === true
      ? ({ theme }) => theme.color.secondaryBright
      : ({ theme }) => theme.color.white};
  border: none;
  border-radius: ${({ theme }) => theme.animation.radiusS};
  cursor: pointer;
  -moz-appearance: none;
  -moz-border-radius: ${({ theme }) => theme.animation.radiusS};
  -webkit-appearance: none;
  -webkit-border-radius: ${({ theme }) => theme.animation.radiusS};
  box-shadow: ${props =>
    props.boxShadow === true
      ? ({ theme }) => theme.animation.shadowBottom
      : 'none'};
  font-weight: ${props =>
    props.fontWeight === 'bold'
      ? ({ theme }) => theme.fontWeight.large
      : ({ theme }) => theme.fontWeight.medium};
  height: ${props =>
    props.height === 'small'
      ? ({ theme }) => theme.spacing.medium
      : ({ theme }) => theme.spacing.large};
  padding: 2px ${({ theme }) => theme.spacing.small};
  transition: ${({ theme }) => theme.animation.transition};
  width: ${props => props.width};

  :focus {
    outline: none;
  }

  &:hover {
    box-shadow: ${props =>
      props.boxShadow === true
        ? ({ theme }) => theme.animation.shadowBottomHover
        : 'none'};
  }
`;
