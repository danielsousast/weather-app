import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import PrimaryCard from '../../components/PrimaryCard';
import SkelectonDefault from '../../components/SkelectonDefault';
import SmallCard from '../../components/SmallCard';
import { WeatherConditionsIcons } from '../../constants';
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData';
import {
  CardsWrapper,
  Container,
  Content,
  HeaderText,
  HeaderWrapper,
  LinkButton,
  LinkButtonText,
  LocationIcon,
  Wrapper,
} from './styles';

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();
  const { curentWeatherData, loading } = useCurrentWeatherData();

  function onSeeHistoricPress() {
    navigate('Forecast' as any);
  }

  return (
    <Container>
      <Content>
        <HeaderWrapper>
          <SkelectonDefault show={loading || !curentWeatherData} width={200}>
            <Wrapper>
              <LocationIcon />
              <HeaderText>{curentWeatherData?.address}</HeaderText>
            </Wrapper>
          </SkelectonDefault>
        </HeaderWrapper>
        <SkelectonDefault show={loading || !curentWeatherData}>
          <PrimaryCard
            loading={loading}
            image={WeatherConditionsIcons[curentWeatherData?.code]}
            temperature={curentWeatherData?.currentTemperature}
            description={curentWeatherData?.description}
          />
        </SkelectonDefault>
        <CardsWrapper>
          <SkelectonDefault show={loading || !curentWeatherData}>
            <SmallCard
              value={curentWeatherData?.minTemperature}
              label="Mínima"
              loading={loading}
            />
          </SkelectonDefault>
          <SkelectonDefault show={loading || !curentWeatherData}>
            <SmallCard
              value={curentWeatherData?.maxTemperature}
              label="Máxima"
              loading={loading}
            />
          </SkelectonDefault>
          <SkelectonDefault show={loading || !curentWeatherData}>
            <SmallCard
              value={curentWeatherData?.humidity}
              label="Humidade"
              loading={loading}
            />
          </SkelectonDefault>
        </CardsWrapper>
        {curentWeatherData && (
          <LinkButton onPress={onSeeHistoricPress}>
            <LinkButtonText>Previsão próximos 7 dias</LinkButtonText>
          </LinkButton>
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
