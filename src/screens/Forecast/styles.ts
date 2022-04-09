import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
const { height } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? 45 : 0}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
  min-height: ${height}px;
`;

export const List = styled.FlatList``;
