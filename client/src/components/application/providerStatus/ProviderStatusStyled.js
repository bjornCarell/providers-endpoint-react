import styled from 'styled-components';

export const ProvidersStatusStyled = styled.span`
  -webkit-box-align: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondaryBright};
  border-radius: ${({ theme }) => theme.animation.radiusM};
  color: ${({ theme }) => theme.color.primaryLight};
  display: inline-flex;
  font-size: 1rem;
  font-weight: 400;
  height: 1.5rem;
  margin-left: ${({ theme }) => theme.spacing.xss};
  margin-right: 0px;
  padding: 0.85rem;
`;
