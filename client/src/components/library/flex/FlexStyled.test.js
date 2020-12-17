import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { FlexContainer } from './FlexStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<FlexContainer />, div);
});

it('renders default conditional styles correctly', () => {
  const tree = renderer
    .create(<FlexContainer>Providers</FlexContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'stretch');
  expect(tree).toHaveStyleRule('align-items', 'flex-start');
  expect(tree).toHaveStyleRule('flex-direction', 'row');
  expect(tree).toHaveStyleRule('justify-content', 'flex-start');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
});

it('renders conditional styles correctly', () => {
  const tree = renderer
    .create(
      <FlexContainer contentStart alignStretch column noWrap justifyCenter>
        Providers
      </FlexContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-start');
  expect(tree).toHaveStyleRule('align-items', 'stretch');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('justify-content', 'center');
  expect(tree).toHaveStyleRule('flex-wrap', 'nowrap');
});

it('renders conditional styles correctly', () => {
  const tree = renderer
    .create(
      <FlexContainer contentEnd alignEnd wrapReverse justifyAround>
        Providers
      </FlexContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-end');
  expect(tree).toHaveStyleRule('align-items', 'flex-end');
  expect(tree).toHaveStyleRule('flex-direction', 'row');
  expect(tree).toHaveStyleRule('justify-content', 'space-around');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap-reverse');
});

it('renders conditional styles correctly', () => {
  const tree = renderer
    .create(
      <FlexContainer contentCenter alignCenter justifyBetween>
        Providers
      </FlexContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'center');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'space-between');
});

it('renders conditional styles correctly', () => {
  const tree = renderer
    .create(
      <FlexContainer contentBetween alignBaseLine justifyEnd>
        Providers
      </FlexContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'space-between');
  expect(tree).toHaveStyleRule('align-items', 'baseline');
  expect(tree).toHaveStyleRule('justify-content', 'flex-end');
});
