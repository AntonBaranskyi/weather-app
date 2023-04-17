import styled from "styled-components";

export const TempuratureInfo = styled.h3`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding-left: 25px;
`;

export const ImageWeather = styled.img`
  position: relative;
  left: 40px;
  bottom: 15px;
  width: 100px;
  height: 100px;
`;

export const CityName = styled.h3`
  font-family: "Courier New", Courier, monospace;
  font-size: 28px;
  text-align: center;
  /* padding-left: 25px; */
`;
export const Info = styled.h4`
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  padding-left: 15px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-flow: row wrap;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: center;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
  flex-wrap: wrap;
`;
