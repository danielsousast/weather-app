import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 3 - 24;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: ${CARD_WIDTH}px;
  width: ${CARD_WIDTH}px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const Value = styled.Text`
  font-size: 22px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
