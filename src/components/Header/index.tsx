import React from 'react';
import { Container, BackIcon, HeaderText, BackButton } from './styles';

type HeaderProps = {
  onBackPress: () => void;
};

const Header: React.FC<HeaderProps> = ({ onBackPress }) => {
  return (
    <Container testID="header-container">
      <BackButton onPress={onBackPress}>
        <BackIcon />
      </BackButton>
      <HeaderText>Previsão próximos 7 dias</HeaderText>
    </Container>
  );
};

export default Header;
