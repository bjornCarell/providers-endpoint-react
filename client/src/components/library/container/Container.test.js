import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Container } from './ContainerStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <Container>
      <div>Providers endpoint</div>
    </Container>,
    div
  );
});

// SNAPSHOTS
it('renders correctly with fullVertical prop', () => {
  const tree = renderer.create(<Container fullVertical />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-bottom', '0');
  expect(tree).toHaveStyleRule('padding-top', '0');
});

it('renders correctly with noPaddingLeft prop', () => {
  const tree = renderer.create(<Container noPaddingLeft />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-left', '0');
});

it('renders correctly with noPaddingRight prop', () => {
  const tree = renderer.create(<Container noPaddingRight />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
});
