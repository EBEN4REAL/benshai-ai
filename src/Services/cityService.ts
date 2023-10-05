import { BASE_URL, API_KEY } from "../config";
import { IWeatherResponse } from "../types";

export async function fetchCityWeatherData(coords, units): Promise<IWeatherResponse> {
  try {
    const url = `${BASE_URL}/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY}&units=${units}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("A problem occured");
  }
}

export async function fetchCityWeatherForecast(coords): Promise<IWeatherResponse> {
    try {
      const url = `${BASE_URL}/data/2.5/forecast/daily?lat=${coords.lat}&lon=${coords.lng}&cnt=5&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("A problem occured");
    }
  }
