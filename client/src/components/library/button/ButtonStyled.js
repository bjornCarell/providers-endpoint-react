import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button.attrs(({ width, height }) => ({
  width: width || 'auto',
  height: height || 'auto'
}))`
  background-color: ${props =>
    props.secondary
      ? ({ theme }) => theme.color.secondary
      : ({ theme }) => theme.color.primaryLight};
  border: 1px solid transparent;
  border-radius: ${props =>
    props.round
      ? ({ theme }) => theme.animation.radiusL
      : ({ theme }) => theme.animation.radiusM};
  box-shadow: ${props => {
    if (props.noShadow) return 'none';
    if (props.shadowAround) return ({ theme }) => theme.animation.shadowAround;
    return ({ theme }) => theme.animation.shadowBottom;
  }};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-size: ${props => {
    if (props.large) return ({ theme }) => theme.fontSize.large;
    if (props.medium) return ({ theme }) => theme.fontSize.medium;
    return ({ theme }) => theme.fontSize.small;
  }};
  font-weight: ${({ theme }) => theme.fontWeight.large};
  height: ${props => props.height};
  padding: 1.2rem 2.4rem;
  transition: ${({ theme }) => theme.animation.transition};
  width: ${props => props.width};

  &:hover {
    background-color: ${props =>
      props.secondary
        ? ({ theme }) => theme.color.secondaryDark
        : ({ theme }) => theme.color.primary};
    box-shadow: ${props => {
      if (props.noShadow) return 'none';
      if (props.around) return ({ theme }) => theme.animation.shadowAroundHover;
      return ({ theme }) => theme.animation.shadowBottomHover;
    }};
  }

  ${props => {
    return (
      props.inverse &&
      css`
        background-color: ${({ theme }) => theme.color.white};
        color: ${props.secondary
          ? ({ theme }) => theme.color.secondary
          : ({ theme }) => theme.color.primaryLight};
        &:hover {
          background-color: ${props.secondary
            ? ({ theme }) => theme.color.secondary
            : ({ theme }) => theme.color.primary};
          color: ${({ theme }) => theme.color.white};
        }
      `
    );
  }};

  ${props => {
    return (
      props.simple &&
      css`
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.black};

        &:hover {
          background-color: ${({ theme }) => theme.color.white};
        }
      `
    );
  }};
`;
