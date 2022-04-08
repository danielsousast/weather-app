import React from 'react';
import { Container, Label, Value } from './styles';

type SmallCardProps = {
  value?: string;
  label?: string;
};

const SmallCard: React.FC<SmallCardProps> = ({ value, label }) => {
  return (
    <Container>
      <Value>{value ?? '--'}</Value>
      <Label>{label ?? '--'}</Label>
    </Container>
  );
};

export default SmallCard;
