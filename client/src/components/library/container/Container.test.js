import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { Container } from './ContainerStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>,
    div
  );
});

// SNAPSHOTS
it('renders correctly with fullVertical prop', () => {
  const tree = renderer
    .create(<Container theme={theme} fullVertical />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-bottom', '0');
  expect(tree).toHaveStyleRule('padding-top', '0');
});

it('renders correctly with noPaddingLeft prop', () => {
  const tree = renderer
    .create(<Container theme={theme} noPaddingLeft />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-left', '0');
});

it('renders correctly with noPaddingRight prop', () => {
  const tree = renderer
    .create(<Container theme={theme} noPaddingRight />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
});
