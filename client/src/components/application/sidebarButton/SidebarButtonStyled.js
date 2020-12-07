import styled from 'styled-components';

export const SidebarButtonStyled = styled.button.attrs(
  ({ background, theme }) => ({
    background: background || theme.color.white
  })
)`
  background-color: 'transparent';
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.animation.radiusM};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.large};
  margin: ${({ theme }) => theme.spacing.xs} 0rem;
  opacity: 0.75;
  padding: ${({ theme }) => theme.spacing.small};

  &:hover {
    opacity: 1;
  }
`;
