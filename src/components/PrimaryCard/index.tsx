import React from 'react';
import { Skeleton } from 'moti/skeleton';

import {
  Container,
  Content,
  Description,
  Header,
  Image,
  ImageBrackgound,
  Subtitle,
  Temperature,
  Title,
  Wrapper,
} from './styles';
import SkelectonDefault from '../SkelectonDefault';

type PrimaryCardProps = {
  image: any;
  temperature?: string;
  description?: string;
  loading: boolean;
};

const PrimaryCard: React.FC<PrimaryCardProps> = ({
  image,
  temperature,
  description,
  loading,
}) => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  return (
    <SkelectonDefault show={loading || !temperature}>
      <Container testID="primary-card-container">
        <Header>
          <Title>Hoje</Title>
          <Subtitle>{currentDate}</Subtitle>
        </Header>
        <Content>
          <Image source={image} resizeMode="contain" />
          <Temperature testID="temperature-text">
            {temperature ?? '--'}
          </Temperature>
          {description && <Description>{description}</Description>}
        </Content>
        <ImageBrackgound source={require('../../assets/images/montain.png')} />
      </Container>
    </SkelectonDefault>
  );
};

export default PrimaryCard;
