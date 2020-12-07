import styled from 'styled-components';

export const Li = styled.li`
  display: ${props => (props.ineherit ? 'inherit' : 'block')};
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
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  padding-bottom: ${props =>
    props.noPadding || props.noPaddingBottom ? 0 : '1.5rem'};
  padding-left: ${props =>
    props.noPadding || props.noPaddingLeft ? 0 : '1.5rem'};
  padding-right: ${props =>
    props.noPadding || props.noPaddingRight ? 0 : '1.5rem'};
  padding-top: ${props =>
    props.noPadding || props.noPaddingTop ? 0 : '1.5rem'};
`;
