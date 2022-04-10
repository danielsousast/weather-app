import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
const { height } = Dimensions.get('window');

type ContainerProps = {
  hasSafe: boolean;
};

export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  padding-top: ${({ hasSafe }) => (hasSafe ? 0 : 35)}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 32,
  },
})`
  flex: 1;
  padding: 16px;
`;
