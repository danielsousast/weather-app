import React from 'react';
import { render } from '@testing-library/react-native';
import { RenderWithTheme } from '../../../jest/renderWithProviders';

import PrimaryCard from './index';

const renderWithTheme = (component) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

describe('PrimaryCard Component', () => {
  test('should be render correctly', () => {
    const { getByTestId } = renderWithTheme(
      <PrimaryCard loading={false} image="any_image" />
    );
    const component = getByTestId('primary-card-container');
    expect(component).toBeTruthy();
  });

  test('should render empty temperature state', () => {
    const { getByTestId } = renderWithTheme(
      <PrimaryCard loading={false} image="any_image" />
    );
    const component = getByTestId('temperature-text');
    expect(component.children[0]).toBe('--');
  });
});
