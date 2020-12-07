import React from 'react';
import PropTypes from 'prop-types';
import { PreStyled } from './PreStyled';

export const Pre = ({ model, JSON, fontSize, display }) => (
  <PreStyled display={display} fontSize={`${fontSize}rem`}>
    {model.length > 0 && JSON}
  </PreStyled>
);

Pre.propTypes = {
  model: PropTypes.array.isRequired,
  JSON: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired
};
