import React from 'react';
import PropTypes from 'prop-types';
import { SelectStyled } from './SelectStyled';

export const Select = ({
  data,
  dataType = '',
  defaultValue,
  onChange,
  inverse,
  boxShadow,
  fontWieght,
  height
}) => {
  return (
    <SelectStyled
      inverse={inverse}
      boxShadow={boxShadow}
      defaultValue={defaultValue}
      fontWieght={fontWieght}
      height={height}
      onChange={onChange}
    >
      {dataType === 'markets'
        ? data.map(({ name, code }) => <option key={code}>{name}</option>)
        : data.map(item => <option key={item}>{item}</option>)}
    </SelectStyled>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  dataType: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inverse: PropTypes.bool,
  boxShadow: PropTypes.bool,
  fontWieght: PropTypes.string,
  height: PropTypes.string
};
