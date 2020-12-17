import styled from 'styled-components';

export const Label = styled.label`
  display: ${props => (props.block ? 'block' : 'inline')};
  font-size: ${props =>
    props.medium
      ? ({ theme }) => theme.fontSize.medium
      : ({ theme }) => theme.fontSize.small};
  font-weight: ${props =>
    props.medium
      ? ({ theme }) => theme.fontWeight.large
      : ({ theme }) => theme.fontWeight.medium};
  margin-bottom: ${props =>
    props.block ? ({ theme }) => theme.spacing.xss : 0};
  margin-top: ${props =>
    props.block ? ({ theme }) => theme.spacing.medium : 0};
`;
