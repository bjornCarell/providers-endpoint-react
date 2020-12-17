import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { theme } from '../../../theme/theme';
import 'jest-styled-components';
import { Input } from './InputStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Input theme={theme} />, div);
});

it('renders with default conditional styles', () => {
  const tree = renderer.create(<Input theme={theme} />).toJSON();
  expect(tree).toHaveStyleRule('background', `${theme.color.white}`);
  expect(tree).toHaveStyleRule('box-shadow', 'none');
  expect(tree).toHaveStyleRule('font-weight', `${theme.fontWeight.medium}`);
  expect(tree).toHaveStyleRule('height', `${theme.spacing.large}`);
});

it('renders with set conditional styles', () => {
  const tree = renderer
    .create(<Input theme={theme} inverse boxShadow bold small />)
    .toJSON();
  expect(tree).toHaveStyleRule('background', `${theme.color.secondaryBright}`);
  expect(tree).toHaveStyleRule('box-shadow', `${theme.animation.shadowAround}`);
  expect(tree).toHaveStyleRule('font-weight', `${theme.fontWeight.large}`);
  expect(tree).toHaveStyleRule('height', `${theme.spacing.medium}`);
});
