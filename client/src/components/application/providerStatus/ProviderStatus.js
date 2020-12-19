import React from 'react';
import PropTypes from 'prop-types';
import { ProvidersStatusStyled } from './ProviderStatusStyled';

export const ProvidersStatus = ({ status }) => (
  <ProvidersStatusStyled>{status && status}</ProvidersStatusStyled>
);

ProvidersStatus.propTypes = {
  status: PropTypes.string
};
