import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScrollTop } from '../../../hooks/useScrollTop';
import { FlexContainer, FlexItem } from '../../library/flex/FlexStyled';
import { SearchAnimation } from '../search/SearchAnimation';
import { Form } from '../../library/form/FormStyled';
import { Label } from '../../library/label/LabelStyled';
import { Select } from '../../library/select/Select';
import { Input } from '../../library/input/InputStyled';

export const ControlJSON = ({
  onChangeSpace,
  onChangeFontSize,
  onKeyDown,
  onSearch,
  search,
  searchNode
}) => {
  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fontSizes = [10, 12, 14, 16, 18, 20, 22, 24];
  const [isText, setIsText] = useState(false);

  const { top } = useScrollTop();

  useEffect(() => {
    if (search.length > 0) setIsText(true);
    else setIsText(false);
  }, [search]);

  return (
    <Form noMargin noPadding width="50rem">
      <FlexContainer>
        <FlexItem noPaddingTop>
          <Label block>Space</Label>
          <Select
            data={spaces}
            defaultValue={'4'}
            onChange={onChangeSpace}
            boxShadow={true}
            fontWieght="bold"
            width="4rem"
          />
        </FlexItem>
        <FlexItem noPaddingTop>
          <Label block>Size</Label>
          <Select
            data={fontSizes}
            defaultValue={'18'}
            onChange={onChangeFontSize}
            boxShadow={true}
            fontWieght="bold"
            width="4rem"
          />
        </FlexItem>
        {top > 300 ? (
          <SearchAnimation
            noPaddingTop
            style={{
              position: 'fixed',
              top: '5rem',
              right: '5rem',
              width: '30rem'
            }}
          >
            <Input
              textValue={isText}
              boxShadow
              onChange={onSearch}
              onKeyDown={onKeyDown}
              ref={searchNode}
              type="search"
              placeholder="Search"
              value={search}
            />
          </SearchAnimation>
        ) : (
          <FlexItem noPaddingTop flexFive>
            <Label block>Search</Label>
            <Input
              textValue={isText}
              boxShadow
              onChange={onSearch}
              onKeyDown={onKeyDown}
              ref={searchNode}
              type="search"
              value={search}
            />
          </FlexItem>
        )}
      </FlexContainer>
    </Form>
  );
};

ControlJSON.propTypes = {
  onChangeFontSize: PropTypes.func.isRequired,
  onChangeSpace: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searchNode: PropTypes.object
};
