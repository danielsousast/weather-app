import styled from "styled-components/native";

export const Container = styled.View`
  min-height: 240px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 12px;
  align-items: flex-end;
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding-top: 24px;
`;

export const LeftContent = styled.View`
  flex: 1;
`;

export const RightContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const Temperature = styled.Text`
  font-size: 78px;
  font-weight: bold;
  color: #fff;
`;

export const CardFooter = styled.View`
  width: 100%;
  align-items: center;
`;

export const FooterText = styled.Text`
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
  width: 100px;
  height: 100px;
`;
