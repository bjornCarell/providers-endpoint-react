import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../library/button/Button';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { Label } from '../../library/label/Label';
import { Select } from '../../library/select/Select';
import { SidebarFormStyled } from './SidebarFormStyled';

export const SidebarForm = ({
  makeResetButtonActive,
  markets,
  onChangeMarket,
  reset
  // notAllProvidersShown
}) => (
  <SidebarFormStyled boxShadow noMargin width="40rem">
    <FlexContainer>
      <FlexItem noPaddingTop>
        <Label block>Market </Label>
        <Select
          data={markets}
          dataType="markets"
          fontWeight="bold"
          inverse
          defaultValue={'Sweden'}
          onChange={onChangeMarket}
        />
      </FlexItem>
      <FlexItem noPaddingTop>
        <Label block>Providers</Label>
        <Button
          secondary
          width="11rem"
          onClick={reset}
          disabled={!makeResetButtonActive}
          style={{
            opacity: makeResetButtonActive ? '1' : '0.8'
          }}
        >
          {makeResetButtonActive ? 'Reset' : 'All'}
        </Button>
      </FlexItem>
    </FlexContainer>
  </SidebarFormStyled>
);

SidebarForm.propTypes = {
  makeResetButtonActive: PropTypes.bool.isRequired,
  markets: PropTypes.array.isRequired,
  onChangeMarket: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  notAllProvidersShown: PropTypes.bool
};
