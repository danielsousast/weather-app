import React from 'react';
import PrimaryCard from '../../components/PrimaryCard';
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const { curentWeatherData } = useCurrentWeatherData();
  return (
    <Container>
      <Content>
        <PrimaryCard temperature={curentWeatherData?.currentTemperature} />
      </Content>
    </Container>
  );
};

export default Dashboard;
