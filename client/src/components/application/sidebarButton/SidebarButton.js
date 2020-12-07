import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { SidebarButtonStyled } from './SidebarButtonStyled';

// eslint-disable-next-line react/display-name
export const SidebarButton = forwardRef((props, ref) => (
  <SidebarButtonStyled key={props.name} onClick={props.onClick} ref={ref}>
    {props.name}
  </SidebarButtonStyled>
));

SidebarButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};
