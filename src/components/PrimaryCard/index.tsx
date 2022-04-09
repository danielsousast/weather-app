import React from 'react';
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

type PrimaryCardProps = {
  image: any;
  temperature?: string;
  description?: string;
};

const PrimaryCard: React.FC<PrimaryCardProps> = ({
  image,
  temperature,
  description,
}) => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  return (
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
  );
};

export default PrimaryCard;
