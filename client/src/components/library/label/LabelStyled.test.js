import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { theme } from '../../../theme/theme';
import 'jest-styled-components';
import { Label } from './LabelStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Label theme={theme}>Providers</Label>, div);
});

it('renders with default conditional styles', () => {
  const tree = renderer.create(<Label theme={theme}>Providers</Label>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', `${theme.fontSize.small}`);
  expect(tree).toHaveStyleRule('font-weight', `${theme.fontWeight.medium}`);
  expect(tree).toHaveStyleRule('margin-bottom', '0');
  expect(tree).toHaveStyleRule('margin-top', '0');
});

it('renders with default conditional styles', () => {
  const tree = renderer
    .create(
      <Label theme={theme} medium block>
        Providers
      </Label>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', `${theme.fontSize.medium}`);
  expect(tree).toHaveStyleRule('font-weight', `${theme.fontWeight.large}`);
  expect(tree).toHaveStyleRule('margin-bottom', `${theme.spacing.xss}`);
  expect(tree).toHaveStyleRule('margin-top', `${theme.spacing.medium}`);
});
