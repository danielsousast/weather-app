import api from '../services/api';
import { CurentWeatherData } from './types';

export class WheatherHttpRequest {
  apiKey = 'afa8ac8d9c0ac9d57c65a7ac53d29e17';

  async getCurrentWeatherData(lat, lon): Promise<CurentWeatherData> {
    try {
      const response = await api.get(
        `/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
      );
      return response.data;
    } catch (error) {
      if (__DEV__) {
        console.log(JSON.stringify(error, null, 2));
      }
    }
    return {} as CurentWeatherData;
  }
}
