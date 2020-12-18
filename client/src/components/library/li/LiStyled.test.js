import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { theme } from '../../../theme/theme';
import 'jest-styled-components';
import { Li } from './LiStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Li theme={theme} />, div);
});

it('renders with default conditional styles', () => {
  const tree = renderer.create(<Li theme={theme}>Providers</Li>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('align-self', 'flex-start');
  expect(tree).toHaveStyleRule('flex', '1');
  expect(tree).toHaveStyleRule('flex-direction', 'row');
  expect(tree).toHaveStyleRule('padding', '1.5rem');
});

it('renders with set conditional styles', () => {
  const tree = renderer
    .create(
      <Li theme={theme} inherit alignSelfEnd flexTwo column noPadding>
        Providers
      </Li>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inherit');
  expect(tree).toHaveStyleRule('align-self', 'flex-end');
  expect(tree).toHaveStyleRule('flex', '2');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('padding', '0');
});

it('renders with set conditional styles', () => {
  const tree = renderer
    .create(
      <Li theme={theme} alignSelfCenter flexThree>
        Providers
      </Li>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-self', 'center');
  expect(tree).toHaveStyleRule('flex', '3');
});
