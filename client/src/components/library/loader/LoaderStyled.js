import styled, { keyframes } from 'styled-components';

const Bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

export const StyledDotsLoader = styled.div`
  display: inline-block;
  left: 50%;
  margin: auto;
  position: absolute;
  top: 50%;
  text-align: center;
`;

export const Dot = styled.span`
  animation: ${Bounce} 1s infinite ease-in-out both;
  background-color: ${props => (props.white ? '#FFF' : '#262626')};
  border-radius: 100%;
  display: inline-block;
  height: ${props => (props.big ? '5rem' : '3rem')};
  width: ${props => (props.big ? '5rem' : '3rem')};
  &:first-child {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;
