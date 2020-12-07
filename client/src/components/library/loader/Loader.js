import React from 'react';
import { StyledDotsLoader, Dot } from './LoaderStyled';

export const Loader = props => (
  <StyledDotsLoader {...props}>
    <Dot {...props} style={{}} />
    <Dot {...props} style={{}} />
    <Dot {...props} style={{}} />
  </StyledDotsLoader>
);
