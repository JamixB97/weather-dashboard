import fs from 'node:fs/promises';
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  name: string;
  sys: any;
  lat: number;
  lon: number;
}
// TODO: Define a class for the Weather object
class Weather {
  temp: number;
  wind: number;
  humidity: number;

  constructor(temp: number, wind: number, humidity: number){
    this.temp = temp;
    this.wind = wind;
    this.humidity = humidity;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
    private baseURL?: string;
    private apiKey?: string;
    private ciyName?: string;
    constructor(cityName: string){
      this.baseURL = process.env.API_BASE_URL || '';
      this.apiKey = process.env.API_KEY || '';
      this.ciyName = cityName;
    }
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/data/2.5/weather?q=${query}&appid=${this.apiKey}`
      );

      const locationData = await response.json();
      return locationData;
    } catch (err) {
      console.log('Error fetching Location data:', err);
      return err;
    }
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    try {
      const { name, sys, lat, lon } = locationData;
  
      // Extract relevant data
      const cityName = name;  
      const countryCode = sys.country; 
      const latitude = lat
      const longitude = lon;  
  
      // Return the extracted data in a structured format
      return {
        cityName,
        countryCode,
        latitude,
        longitude,
      };
    } catch (err) {
      console.error('Error destructuring location data:', err);
      return err; 
    }
  }
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
