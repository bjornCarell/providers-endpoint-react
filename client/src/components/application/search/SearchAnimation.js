import styled, { keyframes } from 'styled-components';
import { FlexItem } from '../../library/flex/FlexStyled';

const fadeInDown = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
    }
`;

export const SearchAnimation = styled(FlexItem)`
  animation: ${fadeInDown} 0.5s ease-in-out both;
  position: fixed;
  top: 5rem;
  right: 5rem;
  width: 30rem;
`;
