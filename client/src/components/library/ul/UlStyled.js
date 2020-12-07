import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  align-content: ${props => {
    if (props.alignContent) return props.content;
    if (props.contentStart) return 'flex-start';
    if (props.contentEnd) return 'flex-end';
    if (props.contentCenter) return 'center';
    if (props.contentBetween) return 'space-between';
    if (props.contentAround) return 'space-around';
    return 'stretch';
  }};
  align-items: ${props => {
    if (props.alignItems) return props.alignItems;
    if (props.alignStretch) return 'stretch';
    if (props.alignEnd) return 'flex-end';
    if (props.alignCenter) return 'center';
    if (props.alignBaseLine) return 'baseline';
    return 'flex-start';
  }};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  flex-wrap: ${props => {
    if (props.wrapReverse) return 'wrap-reverse';
    if (props.noWrap) return 'nowrap';
    return 'wrap';
  }};
  justify-content: ${props => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return 'center';
    if (props.justifyAround) return 'space-around';
    if (props.justifyBetween) return 'space-between';
    if (props.justifyEnd) return 'flex-end';
    return 'flex-start';
  }};
  list-style-type: ${props => {
    if (props.circle) return 'circle';
    if (props.square) return 'square';
    if (props.roman) return 'upper-roman';
    if (props.alpha) return 'lower-alpha';
    return 'none';
  }};
`;
