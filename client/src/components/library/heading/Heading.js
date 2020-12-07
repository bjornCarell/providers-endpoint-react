import React from 'react';
import PropTypes from 'prop-types';
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive
} from './HeadingStyled';

export const Heading = ({
  h2,
  h3,
  h4,
  h5,
  noMargin,
  right,
  center,
  ...props
}) => {
  if (h2)
    return (
      <HeadingTwo
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    );
  if (h3)
    return (
      <HeadingThree
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    );
  if (h4)
    return (
      <HeadingFour
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    );
  if (h5)
    return (
      <HeadingFive
        noMargin={noMargin}
        right={right}
        center={center}
        {...props}
      />
    );
  return (
    <HeadingOne noMargin={noMargin} right={right} center={center} {...props} />
  );
};

Heading.propTypes = {
  h2: PropTypes.node,
  h3: PropTypes.node,
  h4: PropTypes.node,
  h5: PropTypes.node,
  noMargin: PropTypes.node,
  right: PropTypes.node,
  center: PropTypes.node
};
