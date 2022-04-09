import React from 'react';
import { Container, Icon, Temperature, Text } from './styles';

type ItemProps = {
  icon: any;
  date: string;
  minTemperatrue: string;
  maxTemperatrue: string;
};

const Item: React.FC<ItemProps> = ({
  icon,
  date,
  minTemperatrue,
  maxTemperatrue,
}) => {
  return (
    <Container>
      <Icon source={icon} resizeMode="contain" />
      <Text>{date}</Text>
      <Temperature>{minTemperatrue} ~</Temperature>
      <Temperature> {maxTemperatrue}</Temperature>
    </Container>
  );
};

export default Item;
