import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 3 - 24;

export const Container = styled.View`
  background-color: #2e3341;
  height: ${CARD_WIDTH};
  width: ${CARD_WIDTH}PX;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  shadow-color: #151515;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 8px;
  elevation: 8;
`;

export const Value = styled.Text`
  font-size: 22px;
  margin-bottom: 4px;
  color: #fff;
  font-weight: 600;
`;

export const Label = styled.Text`
  color: #fff;
`;
