import React from 'react';
import { Container, Label, Value } from './styles';

type SmallCardProps = {
  value?: string;
  label?: string;
};

const SmallCard: React.FC<SmallCardProps> = ({ value, label }) => {
  return (
    <Container testID="small-card-container">
      <Value testID="value-text">{value ?? '--'}</Value>
      <Label testID="label-text">{label ?? '--'}</Label>
    </Container>
  );
};

export default SmallCard;
