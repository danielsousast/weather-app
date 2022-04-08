import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 8px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Text = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
`;

export const Temperature = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;
