import React from "react";
import { MainTitle, MainWrapper } from "../Main/MainStyled";
import {
  CityName,
  ImageWeather,
  Info,
  WeatherInfoContainer,
  TempuratureInfo,
} from "./CityForecastStyled";
import sun from "../../assets/2682848_day_forecast_sun_sunny_weather_icon.png";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import { useSelector } from "react-redux";
import cloud from "../../assets/316293_clouds_icon.png";
import wind from "../../assets/wind.svg";
import sunsetImg from "../../assets/6802392_climate_element_forecast_sun_sunrise_icon.png";
import rain from "../../assets/9045015_rain_icon.png";
import fog from "../../assets/2682811_cloud_cloudy_fog_mist_moon_icon.png";

function CityForecast() {
  const { weatherData } = useSelector((state) => state.weather);
  const temp = weatherData.main.temp;
  const general = weatherData.weather[0].main;
  const { country, sunrise, sunset } = weatherData.sys;
  const { all } = weatherData.clouds;
  const { speed } = weatherData.wind;
  const city = weatherData.name;

  const formTime = (date) => {
    const sunsetDate = new Date(date * 1000); // Timestamp в мілісекундах, тому множимо на 1000
    const sunsetTime = sunsetDate.toLocaleTimeString();

    return sunsetTime;
  };

  return (
    <MainWrapper>
      <MainTitle>React weather app</MainTitle>

      <div
        style={{
          display: "flex",
          marginBottom: "5px",
          justifyContent: "center",
        }}
      >
        <TempuratureInfo>
          {temp.toFixed()}°C | {general}
        </TempuratureInfo>
        {general === "Clouds" ? (
          <ImageWeather src={cloud} alt="sun" />
        ) : general === "Clear" ? (
          <ImageWeather src={sun} alt="sun" />
        ) : general === "Rain" ? (
          <ImageWeather src={rain} alt="rain" />
        ) : (
          <ImageWeather src={fog} alt="rain" />
        )}
      </div>
      <CityName>
        {city},{country}
      </CityName>
      <Info>Weather info</Info>

      <WeatherInfoContainer>
        <WeatherInfo image={sun} label={`${formTime(sunrise)} Sunrice`} />
        <WeatherInfo label={`${formTime(sunset)} Sunset`} image={sunsetImg} />
        <WeatherInfo label={`Clouds: ${all}`} image={cloud} />
        <WeatherInfo label={`Wind speed: ${speed} m/s`} image={wind} />
      </WeatherInfoContainer>
    </MainWrapper>
  );
}

export default CityForecast;
