import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;

export const List = styled.FlatList``;
