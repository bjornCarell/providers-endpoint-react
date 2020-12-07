import styled from 'styled-components';

export const FlexContainer = styled.div`
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
`;

export const FlexItem = styled.div`
  align-self: ${props => {
    if (props.aligSelf) return props.aligSelf;
    if (props.alignSelfEnd) return 'flex-end';
    if (props.alignSelfCenter) return 'center';
    return 'flex-start';
  }};
  flex: ${props => {
    if (props.flexNone) return 0;
    if (props.flexTwo) return 2;
    if (props.flexThree) return 3;
    return 1;
  }};
  padding: ${props => (props.noPadding ? 0 : '1.5rem')};
`;

export const FlexColumn = styled.div`
  width: ${props => {
    if (props.two) return '50%';
    if (props.three) return '33.33%';
    if (props.four) return '25%';
    return '100%';
  }};
`;
