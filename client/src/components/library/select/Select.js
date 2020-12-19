import React from 'react';
import PropTypes from 'prop-types';
import { SelectStyled } from './SelectStyled';

export const Select = ({
  boxShadow,
  data,
  dataType = '',
  defaultValue,
  fontWieght,
  height,
  inverse,
  onChange,
  width
}) => {
  return (
    <SelectStyled
      inverse={inverse}
      boxShadow={boxShadow}
      defaultValue={defaultValue}
      fontWieght={fontWieght}
      height={height}
      onChange={onChange}
      width={width}
    >
      {data && dataType === 'markets' // move component to application folder?
        ? data.map(({ name, code }) => <option key={code}>{name}</option>)
        : data.map(item => <option key={item}>{item}</option>)}
    </SelectStyled>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  dataType: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  inverse: PropTypes.bool,
  boxShadow: PropTypes.bool,
  fontWieght: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};
