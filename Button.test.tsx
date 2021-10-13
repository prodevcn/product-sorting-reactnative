import React from 'react';
import {create} from 'react-test-renderer';

jest.unmock('react-native');

describe('components', () => {
  describe('Button', () => {
    test('should render in button container when loading is true', () => {
      create(<></>);
    });
  });
});
