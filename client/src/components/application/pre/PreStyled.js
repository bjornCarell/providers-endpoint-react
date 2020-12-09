import styled from 'styled-components';

export const PreStyled = styled.pre`
  display: ${props => props.display};
  font-size: ${props => props.fontSize};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
