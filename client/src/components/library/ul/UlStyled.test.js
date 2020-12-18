import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { theme } from '../../../theme/theme';
import 'jest-styled-components';
import { Ul } from './UlStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Ul theme={theme} />, div);
});

it('renders with default conditional styles', () => {
  const tree = renderer.create(<Ul theme={theme}>Providers</Ul>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('align-content', 'stretch');
  expect(tree).toHaveStyleRule('align-items', 'flex-start');
  expect(tree).toHaveStyleRule('flex-direction', 'row');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
  expect(tree).toHaveStyleRule('justify-content', 'flex-start');
  expect(tree).toHaveStyleRule('list-style-type', 'none');
});

//
it('renders with set conditional styles', () => {
  const tree = renderer
    .create(
      <Ul
        theme={theme}
        contentStart
        alignStretch
        column
        wrapReverse
        justifyCenter
        circle
      >
        Providers
      </Ul>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-start');
  expect(tree).toHaveStyleRule('align-items', 'stretch');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap-reverse');
  expect(tree).toHaveStyleRule('justify-content', 'center');
  expect(tree).toHaveStyleRule('list-style-type', 'circle');
});

//
it('renders with set conditional styles', () => {
  const tree = renderer
    .create(
      <Ul theme={theme} contentEnd alignEnd noWrap justifyAround square>
        Providers
      </Ul>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-end');
  expect(tree).toHaveStyleRule('align-items', 'flex-end');
  expect(tree).toHaveStyleRule('flex-wrap', 'nowrap');
  expect(tree).toHaveStyleRule('justify-content', 'space-around');
  expect(tree).toHaveStyleRule('list-style-type', 'square');
});

//
it('renders with set conditional styles', () => {
  const tree = renderer
    .create(
      <Ul theme={theme} contentCenter alignCenter justifyBetween roman>
        Providers
      </Ul>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'center');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'space-between');
  expect(tree).toHaveStyleRule('list-style-type', 'upper-roman');
});

//
it('renders with set conditional styles', () => {
  const tree = renderer
    .create(
      <Ul theme={theme} contentBetween alignBaseLine justifyEnd alpha>
        Providers
      </Ul>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'space-between');
  expect(tree).toHaveStyleRule('align-items', 'baseline');
  expect(tree).toHaveStyleRule('justify-content', 'flex-end');
  expect(tree).toHaveStyleRule('list-style-type', 'lower-alpha');
});

//
it('renders with set conditional styles', () => {
  const tree = renderer
    .create(
      <Ul theme={theme} contentAround>
        Providers
      </Ul>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'space-around');
});
