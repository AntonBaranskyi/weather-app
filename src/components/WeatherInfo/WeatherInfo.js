import React from "react";
import { InfoContainer, InfoIcon, InfoLabel } from "./WeatherStyled";

export default function WeatherInfo({ image, label }) {
  return (
    <InfoContainer>
      <InfoIcon src={image} />
      <InfoLabel>{label}</InfoLabel>
    </InfoContainer>
  );
}
