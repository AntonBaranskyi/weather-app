import React from "react";
import { InfoContainer, InfoIcon, InfoLabel } from "./WeatherStyled";
import sunset from "../../assets/211827_sunny_icon.png";


export default function WeatherInfo() {
  return (
    <InfoContainer>
      <InfoIcon src={sunset} />
      <InfoLabel>
        22 : 14
        <span>Sunset</span>
      </InfoLabel>
    </InfoContainer>
  );
}
