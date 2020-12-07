import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonStyled';
import { Loader } from '../loader/Loader';

export const Button = ({
  secondary,
  large,
  inverse,
  loading,
  children,
  ...props
}) => (
  <ButtonStyled
    secondary={secondary}
    large={large}
    inverse={inverse}
    {...props}
  >
    {loading ? <Loader small white /> : children}
  </ButtonStyled>
);

Button.propTypes = {
  secondary: PropTypes.bool,
  large: PropTypes.bool,
  inverse: PropTypes.bool,
  loading: PropTypes.node,
  children: PropTypes.string,
  props: PropTypes.object
};
