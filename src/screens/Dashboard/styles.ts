import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Entypo from '@expo/vector-icons/Entypo';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? 20 : 0}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const CardsWrapper = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  align-self: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LinkButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LinkButtonText = styled.Text`
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const HeaderWrapper = styled.View`
  align-self: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Wrapper = styled.View`
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

export const LocationIcon = styled(Entypo).attrs(({ theme }) => ({
  name: 'location-pin',
  size: 24,
  color: theme.colors.blue,
}))`
  margin-right: 12px;
`;
