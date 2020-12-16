import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { theme } from '../../../theme/theme';

it('renders button without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>,
    div
  );
});

it('renders inverse button without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Button theme={theme} />, div);
});

// SNAPSHOTS
it('renders default button correctly', () => {
  const tree = renderer.create(<Button theme={theme}>Tink</Button>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule(
    'background-color',
    `${theme.color.primaryLight}`
  );
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', `${theme.color.white}`);
});

it('renders inverse button correctly', () => {
  const tree = renderer
    .create(
      <Button theme={theme} inverse>
        Think
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', `${theme.color.white}`);
  expect(tree).toHaveStyleRule('color', `${theme.color.primaryLight}`);
});

it('renders round secondary button with box-shadow', () => {
  const tree = renderer
    .create(
      <Button theme={theme} secondary round shadowAround>
        Think
      </Button>
    )
    .toJSON();
  expect(tree).toHaveStyleRule('background-color', `${theme.color.secondary}`);
  expect(tree).toHaveStyleRule('border-radius', `${theme.animation.radiusL}`);
  expect(tree).toHaveStyleRule('box-shadow', `${theme.animation.shadowAround}`);
});
