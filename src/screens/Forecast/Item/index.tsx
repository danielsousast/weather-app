import React, { useState } from 'react';
import { Animated } from 'react-native';
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
  const [opacity] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        opacity,
      }}
    >
      <Container>
        <Icon source={icon} resizeMode="contain" />
        <Text>{date}</Text>
        <Temperature>{minTemperatrue} ~</Temperature>
        <Temperature> {maxTemperatrue}</Temperature>
      </Container>
    </Animated.View>
  );
};

export default Item;
