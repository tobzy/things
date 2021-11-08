import * as React from 'react';
import renderer from 'react-test-renderer';

import { Header } from '../Header';

it(`Header renders correctly`, () => {
  const tree = renderer.create(<Header buttonText={"Test"}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
