import React from 'react';
import PrimaryCard from '../../components/PrimaryCard';
import SmallCard from '../../components/SmallCard';
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData';
import { CardsWrapper, Container, Content, HeaderText } from './styles';

const Dashboard: React.FC = () => {
  const { curentWeatherData } = useCurrentWeatherData();
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
      </Content>
    </Container>
  );
};

export default Dashboard;
