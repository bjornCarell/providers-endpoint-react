import React from 'react';
import ReactDom from 'react-dom';
import { Loader } from './Loader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Loader />, div);
});
