import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '../../context/AppContext';
import { Day } from '../../factory/factoryForecastData';
import { weatherSlice } from '../../redux/reducers';
import { AppState } from '../../redux/selectors';
import Item from './Item';
import { Container, Content, List } from './styles';

const Forecast: React.FC = () => {
  const dispatch = useDispatch();
  const { location } = useLocation();
  const forecastDays = useSelector(
    (state: AppState) => state?.weather?.forecast
  );

  useEffect(() => {
    if (location) {
      getForecast(location?.latitude, location.longitude);
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
      />
    );
  }

  return (
    <Container>
      <Content>
        <List
          data={forecastDays}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.date)}
        />
      </Content>
    </Container>
  );
};

export default Forecast;
