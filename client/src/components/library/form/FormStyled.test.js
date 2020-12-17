import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { theme } from '../../../theme/theme';
import 'jest-styled-components';
import { Form } from './FormStyled';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Form theme={theme} />, div);
});

it('renders default conditional styles', () => {
  const tree = renderer.create(<Form theme={theme}></Form>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background', 'transparent');
  expect(tree).toHaveStyleRule('height', 'auto');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('box-shadow', 'none');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('margin-top', `${theme.spacing.small}`);
  expect(tree).toHaveStyleRule('margin-left', `${theme.spacing.small}`);
  expect(tree).toHaveStyleRule('padding', `${theme.spacing.small}`);
});

it('renders conditional styles', () => {
  const tree = renderer
    .create(
      <Form
        theme={theme}
        background="#FFF"
        height="65rem"
        width="32.5rem"
        boxShadow
        flexRow
        noMargin
        noPadding
      ></Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background', '#FFF');
  expect(tree).toHaveStyleRule('height', '65rem');
  expect(tree).toHaveStyleRule('width', '32.5rem');
  expect(tree).toHaveStyleRule('box-shadow', `${theme.animation.shadowAround}`);
  expect(tree).toHaveStyleRule('flex-direction', 'row');
  expect(tree).toHaveStyleRule('margin-top', '0rem');
  expect(tree).toHaveStyleRule('margin-left', '0rem');
  expect(tree).toHaveStyleRule('padding', '0rem');
});
