import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { Form } from '../../library/form/Form';
import { Label } from '../../library/label/Label';
import { Select } from '../../library/select/Select';
import { Input } from '../../library/input/Input';

export const ControlJSON = ({
  onChangeSpace,
  onChangeFontSize,
  onSearch,
  node
}) => {
  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fontSizes = [10, 12, 14, 16, 18, 20, 22, 24];

  return (
    <Form noMargin noPadding flexRow width="50rem">
      <FlexContainer>
        <FlexItem noPaddingTop>
          <Label block>Space</Label>
          <Select
            data={spaces}
            defaultValue={'2'}
            onChange={onChangeSpace}
            boxShadow={true}
            fontWieght="bold"
          />
        </FlexItem>
        <FlexItem noPaddingTop>
          <Label block>Size</Label>
          <Select
            data={fontSizes}
            defaultValue={'16'}
            onChange={onChangeFontSize}
            boxShadow={true}
            fontWieght="bold"
          />
        </FlexItem>
      </FlexContainer>
      <FlexItem noPaddingTop>
        <Label block>Search the model</Label>
        <Input boxShadow onChange={onSearch} ref={node} type="search" />
      </FlexItem>
    </Form>
  );
};

ControlJSON.propTypes = {
  node: PropTypes.object.isRequired,
  onChangeFontSize: PropTypes.func.isRequired,
  onChangeSpace: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};