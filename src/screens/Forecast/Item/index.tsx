import React from 'react';
import { Container, Temperature, Text } from './styles';

type ItemProps = {
  date: string;
  minTemperatrue: string;
  maxTemperatrue: string;
};

const Item: React.FC<ItemProps> = ({
  date,
  minTemperatrue,
  maxTemperatrue,
}) => {
  return (
    <Container>
      <Text>{date}</Text>
      <Temperature>{minTemperatrue} ~</Temperature>
      <Temperature> {maxTemperatrue}</Temperature>
    </Container>
  );
};

export default Item;
