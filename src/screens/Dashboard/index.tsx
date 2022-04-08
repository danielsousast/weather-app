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
        <HeaderText>Posse, Goiás</HeaderText>
        <PrimaryCard temperature={curentWeatherData?.currentTemperature} />
        <CardsWrapper>
          <SmallCard
            value={curentWeatherData?.minTemperature}
            label="Min Temp"
          />
          <SmallCard
            value={curentWeatherData?.maxTemperature}
            label="Max Temp"
          />
          <SmallCard value={curentWeatherData?.humidity} label="Humidity" />
        </CardsWrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
