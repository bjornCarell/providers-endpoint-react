import styled from 'styled-components';

export const Input = styled.input`
  appearance: none;
  background: ${props =>
    props.inverse
      ? ({ theme }) => theme.color.secondaryBright
      : ({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.secondaryLight};
  border-radius: ${({ theme }) => theme.animation.radiusS};
  cursor: text;
  -moz-appearance: none;
  -moz-border-radius: ${({ theme }) => theme.animation.radiusS};
  -webkit-appearance: none;
  -webkit-border-radius: ${({ theme }) => theme.animation.radiusS};
  box-shadow: ${props =>
    props.boxShadow ? ({ theme }) => theme.animation.shadowAround : 'none'};
  font-weight: ${props =>
    props.bold
      ? ({ theme }) => theme.fontWeight.large
      : ({ theme }) => theme.fontWeight.medium};
  height: ${props =>
    props.small
      ? ({ theme }) => theme.spacing.medium
      : ({ theme }) => theme.spacing.large};
  padding: 2px ${({ theme }) => theme.spacing.small};
  transition: ${({ theme }) => theme.animation.transition};
  width: 100%;

  &:hover {
    box-shadow: ${props =>
      props.boxShadow
        ? ({ theme }) => theme.animation.shadowAroundHover
        : 'none'};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.color.secondary};
    outline: none;
  }
`;
