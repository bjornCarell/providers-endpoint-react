import styled, { keyframes } from 'styled-components';

const fadeInRight = keyframes`
  0% {
        opacity: 0;
        transform: translateX(-80px);
        -webkit-transform: translateX(-80px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }
`;

export const PreStyled = styled.pre`
  animation: ${fadeInRight} 0.5s ease-in;
  display: ${props => props.display};
  font-size: ${props => props.fontSize};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
