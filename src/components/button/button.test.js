import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Button from './button';

afterEach(cleanup);

test('Button works', () => {
  const { getByText } = render(<Button>Test</Button>);
  const buttonNode = getByText('Test');
  fireEvent.click(buttonNode);
  expect(buttonNode.textContent).toBe('Toggled');
});
