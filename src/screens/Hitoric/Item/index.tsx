import React from 'react';
import { Container, Temperature, Text } from './styles';

const Item: React.FC = () => {
  return (
    <Container>
      <Text>Nublado</Text>
      <Temperature>32</Temperature>
      <Temperature>32</Temperature>
    </Container>
  );
};

export default Item;
