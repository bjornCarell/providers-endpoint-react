import React from 'react';
import PropTypes from 'prop-types';
import { ProvidersStatusStyled } from '../providerStatus/ProviderStatusStyled';

export const StatusFilter = ({ statuses, onClickStatus }) => {
  return statuses.map(status => (
    <ProvidersStatusStyled key={status} onClick={onClickStatus}>
      {status}
    </ProvidersStatusStyled>
  ));
};

StatusFilter.PropTypes = {
  statuses: PropTypes.array.isRequired,
  onClickStatus: PropTypes.func
};
