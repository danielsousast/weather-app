import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Content = styled.View`
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
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
