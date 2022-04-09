import { Skeleton } from 'moti/skeleton';
import React from 'react';
import SkelectonDefault from '../SkelectonDefault';
import { Container, Label, Value } from './styles';

type SmallCardProps = {
  loading: boolean;
  value?: string;
  label?: string;
};

const SmallCard: React.FC<SmallCardProps> = ({ value, label, loading }) => {
  return (
    <SkelectonDefault show={loading || !value}>
      <Container testID="small-card-container">
        <Value testID="value-text">{value ?? '--'}</Value>
        <Label testID="label-text">{label ?? '--'}</Label>
      </Container>
    </SkelectonDefault>
  );
};

export default SmallCard;
