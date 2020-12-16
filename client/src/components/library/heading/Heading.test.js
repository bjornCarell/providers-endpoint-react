import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { Heading } from './Heading';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <Heading theme={theme} />
    </ThemeProvider>,
    div
  );
});

it('renders h1 with conditional style', () => {
  const tree = renderer
    .create(<Heading theme={theme}>Providers</Heading>)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', `${theme.fontSize.xxl}`);
  expect(tree).toHaveStyleRule('margin-bottom', `${theme.spacing.large}`);
});

it('renders h1 with no margin and text-align center', () => {
  const tree = renderer
    .create(
      <Heading theme={theme} noMargin center>
        Providers
      </Heading>
    )
    .toJSON();

  expect(tree).toHaveStyleRule('margin-bottom', '0');
  expect(tree).toHaveStyleRule('text-align', 'center');
});

it('renders h1 with text-align right', () => {
  const tree = renderer
    .create(
      <Heading theme={theme} right>
        Providers
      </Heading>
    )
    .toJSON();

  expect(tree).toHaveStyleRule('text-align', 'right');
});

it('renders h2 with conditional style', () => {
  const tree = renderer
    .create(
      <Heading theme={theme} h2>
        Providers
      </Heading>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', `${theme.fontSize.xl}`);
  expect(tree).toHaveStyleRule('margin-bottom', `${theme.spacing.medium}`);
});

it('renders h3 with conditional style', () => {
  const tree = renderer
    .create(
      <Heading theme={theme} h3>
        Providers
      </Heading>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', `${theme.fontSize.large}`);
  expect(tree).toHaveStyleRule('margin-bottom', `${theme.spacing.small}`);
});

it('renders h3 with conditional style', () => {
  const tree = renderer
    .create(
      <Heading theme={theme} h4>
        Providers
      </Heading>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', `${theme.fontSize.medium}`);
  expect(tree).toHaveStyleRule('margin-bottom', `${theme.spacing.xs}`);
});

it('renders h5 with conditional style', () => {
  const tree = renderer
    .create(
      <Heading theme={theme} h5>
        Providers
      </Heading>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', `${theme.fontSize.small}`);
  expect(tree).toHaveStyleRule('margin-bottom', `${theme.spacing.xss}`);
});
