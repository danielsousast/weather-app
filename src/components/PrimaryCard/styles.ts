import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 16px;
  height: ${height / 2}px;
  flex-wrap: wrap;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
`;

export const Temperature = styled.Text`
  font-size: 74px;
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.Image`
  width: 220px;
  height: 120px;
`;

export const ImageBrackgound = styled.Image`
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 100%;
  z-index: -999;
  opacity: 0.1;
`;

export const Description = styled.Text`
  align-self: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
