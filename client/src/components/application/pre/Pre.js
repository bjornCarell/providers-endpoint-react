import React from 'react';
import PropTypes from 'prop-types';
import { PreStyled } from './PreStyled';

export const Pre = ({ JSON, fontSize, display }) => (
  <PreStyled display={display} fontSize={`${fontSize}rem`}>
    {JSON && JSON}
  </PreStyled>
);

Pre.propTypes = {
  loading: PropTypes.bool,
  JSON: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired
};
