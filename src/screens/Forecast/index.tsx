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
import { Container, Content } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Forecast: React.FC = () => {
  const hasSafe = useSafeAreaInsets().bottom;
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

  function renderItem(item: Day) {
    return (
      <Item
        key={item.date}
        date={item.formatedDate}
        minTemperatrue={item.minTemperature}
        maxTemperatrue={item.maxTemperature}
        icon={WeatherConditionsIcons[item.code]}
      />
    );
  }

  return (
    <Container hasSafe={hasSafe}>
      <Header onBackPress={goBack} />
      {loading ? (
        <Loading />
      ) : (
        <Content>{forecast?.map((item) => renderItem(item))}</Content>
      )}
    </Container>
  );
};

export default Forecast;
