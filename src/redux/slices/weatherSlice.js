import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "a2df46183fd756367cb7dcc6f911799c";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeather",
  async (params) => {
    const responce = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=${API_KEY}&units=metric`
    );
    return (await responce).data;
  }
);

const initialState = {
  weatherData: {},
  status: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.status = "succes";
      state.weatherData = action.payload;
    });

    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.status = "error";
      state.weatherData = {};
    });
  },
});

export const { getWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
