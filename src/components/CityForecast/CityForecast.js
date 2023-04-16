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
import cloud from "../../assets/216467_sunny_weather_partly_icon.png";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import { useSelector } from "react-redux";

function CityForecast() {
  const { weatherData } = useSelector((state) => state.weather);
  const temp = weatherData.main.temp;
  const general = weatherData.weather[0].main;
  console.log(general);
  const country = weatherData.sys.country;
  const city = weatherData.name;

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
        ) : (
          <ImageWeather src={sun} alt="sun" />
        )}
      </div>
      <CityName>
        {city},{country}
      </CityName>
      <Info>Weather info</Info>

      <WeatherInfoContainer>
        <WeatherInfo />
        <WeatherInfo />
        <WeatherInfo />
        <WeatherInfo />
      </WeatherInfoContainer>
    </MainWrapper>
  );
}

export default CityForecast;
