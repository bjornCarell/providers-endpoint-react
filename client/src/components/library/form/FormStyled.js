import styled from 'styled-components';

export const Form = styled.form.attrs(({ background, height, width }) => ({
  background: background || 'transparent',
  height: height || 'auto',
  width: width || '100%'
}))`
  background: ${props => props.background};
  border-radius: 5px;
  box-shadow: ${props =>
    props.boxShadow ? ({ theme }) => theme.animation.shadowAround : 'none'};
  /* display: flex;
  flex-direction: ${props => (props.flexRow ? 'row' : 'column')}; */
  height: ${props => props.height};
  /* justify-content: stretch; */
  margin-top: ${props =>
    props.noMargin ? '0rem' : ({ theme }) => theme.spacing.small};
  margin-left: ${props =>
    props.noMargin ? '0rem' : ({ theme }) => theme.spacing.small};
  padding: ${props =>
    props.noPadding ? '0rem' : ({ theme }) => theme.spacing.small};
  width: ${props => props.width};
`;
