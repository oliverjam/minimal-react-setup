import React from 'react';
import { renderIntoDocument, fireEvent } from 'react-testing-library';
import Button from './button';

test('Button works', () => {
  const { getByText } = renderIntoDocument(<Button>Test</Button>);
  const buttonNode = getByText('Test');
  fireEvent.click(buttonNode);
  expect(buttonNode.textContent).toBe('Toggled');
});
