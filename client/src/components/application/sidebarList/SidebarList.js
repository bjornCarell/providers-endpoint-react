import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '../../library/flex/FlexStyled';
import { Ul } from '../../library/ul/UlStyled';
import { Li } from '../../library/li/LiStyled';
import { SidebarButton } from '../sidebarButton/SidebarButton';
import { ProvidersStatus } from '../providerStatus/ProviderStatus';

// How to get the changing of colors to work with this

export const SidebarList = ({ data, ref, toggleProvider, providerStatus }) => (
  <Ul column>
    {data.map(({ name, status }) => (
      <Li key={name} noPaddingBottom noPaddingTop>
        <FlexContainer alignCenter>
          <SidebarButton
            name={name}
            key={name}
            onClick={e => toggleProvider(e)}
            ref={ref}
          />
          <ProvidersStatus status={providerStatus(status)} />
        </FlexContainer>
      </Li>
    ))}
  </Ul>
);

SidebarList.propTypes = {
  data: PropTypes.array.isRequired,
  ref: PropTypes.node.isRequired,
  toggleProvider: PropTypes.func.isRequired,
  providerStatus: PropTypes.func.isRequired
};
