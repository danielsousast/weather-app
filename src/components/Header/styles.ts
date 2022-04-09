import styled from 'styled-components/native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export const Container = styled.View`
  width: 100%;
  height: 70px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled(SimpleLineIcons).attrs(({ theme }) => ({
  name: 'arrow-left',
  size: 24,
  color: theme.colors.blue,
}))``;

export const HeaderText = styled.Text`
  flex: 1;
  font-size: 18px;
  text-align: center;
  width: 30%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
