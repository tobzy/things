import * as React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import { GreyButton, Button } from '../Button';

it(`Button renders correctly`, () => {
  const tree = renderer.create(<Button buttonText={"Test"}/>).toJSON();
  expect(tree).toMatchSnapshot();
});


test('Button calls onPress prop when clicked', () => {
  const mockFn = jest.fn();

  const { getByText } = render(
      <Button buttonText={"Test"} onPress={mockFn}/>
  );

  fireEvent.press(getByText('Test'));

  expect(mockFn).toBeCalled();
});

test('Grey Button calls onPress prop when clicked', () => {
  const mockFn = jest.fn();

  const { getByText } = render(
      <GreyButton buttonText={"Test"} onPress={mockFn}/>
  );

  fireEvent.press(getByText('Test'));

  expect(mockFn).toBeCalled();
});