import React from 'react';
import { render } from '@testing-library/react-native';
import { RenderWithTheme } from '../../../jest/renderWithProviders';

import SmallCard from './index';

const renderWithTheme = (component) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

describe('PrimaryCard Component', () => {
  test('should be render correctly', () => {
    const { getByTestId } = renderWithTheme(<SmallCard loading={false} />);
    const component = getByTestId('small-card-container');
    expect(component).toBeTruthy();
  });

  test('should render empty value state', () => {
    const { getByTestId } = renderWithTheme(<SmallCard loading={false} />);
    const component = getByTestId('value-text');
    expect(component.children[0]).toBe('--');
  });

  test('should render empty label state', () => {
    const { getByTestId } = renderWithTheme(<SmallCard loading={false} />);
    const component = getByTestId('label-text');
    expect(component.children[0]).toBe('--');
  });
});
