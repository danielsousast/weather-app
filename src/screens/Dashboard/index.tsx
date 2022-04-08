import { useNavigation } from '@react-navigation/native';
import React from 'react';
import PrimaryCard from '../../components/PrimaryCard';
import SmallCard from '../../components/SmallCard';
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData';
import {
  CardsWrapper,
  Container,
  Content,
  HeaderText,
  LinkButton,
  LinkButtonText,
} from './styles';

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();
  const { curentWeatherData } = useCurrentWeatherData();

  function onSeeHistoricPress() {
    navigate('Historic' as any);
  }

  return (
    <Container>
      <Content>
        <HeaderText>{curentWeatherData?.address}</HeaderText>
        <PrimaryCard
          temperature={curentWeatherData?.currentTemperature}
          description={curentWeatherData?.description}
        ></PrimaryCard>
        <CardsWrapper>
          <SmallCard value={curentWeatherData?.minTemperature} label="Mínima" />
          <SmallCard value={curentWeatherData?.maxTemperature} label="Máxima" />
          <SmallCard value={curentWeatherData?.humidity} label="Humidade" />
        </CardsWrapper>
        <LinkButton onPress={onSeeHistoricPress}>
          <LinkButtonText>Ver histórico</LinkButtonText>
        </LinkButton>
      </Content>
    </Container>
  );
};

export default Dashboard;
