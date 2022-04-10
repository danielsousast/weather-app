import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Item from './Item';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { useLocation } from '../../context/AppContext';
import { WeatherConditionsIcons } from '../../constants';
import { Day } from '../../factory/factoryForecastData';
import { AppState } from '../../redux/selectors';
import { weatherSlice } from '../../redux/reducers';
import { Container, Content, List } from './styles';

const Forecast: React.FC = () => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const { location } = useLocation();
  const { loading, forecast } = useSelector(
    (state: AppState) => state?.weather
  );

  useEffect(() => {
    if (location) {
      getForecast(location?.latitude, location?.longitude);
    }
  }, [location]);

  function getForecast(lat: number, lon: number) {
    if (!lat || !lon) return;
    dispatch(weatherSlice.actions.getForecastData({ lat, lon }));
  }

  function renderItem({ item }: { item: Day }) {
    return (
      <Item
        date={item.formatedDate}
        minTemperatrue={item.minTemperature}
        maxTemperatrue={item.maxTemperature}
        icon={WeatherConditionsIcons[item.code]}
      />
    );
  }

  return (
    <Container>
      <Header onBackPress={goBack} />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <List
            data={forecast}
            renderItem={renderItem}
            ren
            keyExtractor={(item) => String(item.date)}
          />
        </Content>
      )}
    </Container>
  );
};

export default Forecast;
