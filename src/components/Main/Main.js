import React, { useState } from "react";
import {
  CityTitle,
  MainButton,
  MainInput,
  MainPhoto,
  MainTitle,
  MainWrapper,
} from "./MainStyled";
import icon from "../../assets/images.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../redux/slices/weatherSlice";

function Main() {
  const { status } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState();
  const fetchWeather = () => {
    dispatch(fetchWeatherData(searchValue));
  };
  return (
    <MainWrapper>
      <MainTitle>React weather app</MainTitle>
      <MainPhoto src={icon} alt="weather" />
      <CityTitle>Write down your city</CityTitle>
      {status === "error" ? (
        <MainInput
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="Error, try again"
          onError={true}
        />
      ) : (
        <MainInput
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="City"
        />
      )}

      {searchValue ? (
        <MainButton onClick={fetchWeather} type="submit">
          Search{" "}
        </MainButton>
      ) : (
        <MainButton disabled>Search</MainButton>
      )}
    </MainWrapper>
  );
}

export default Main;
