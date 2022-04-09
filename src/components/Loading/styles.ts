import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;
