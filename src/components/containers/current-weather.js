import React from "react";
import { DARK_SKY_API_KEY } from "react-native-dotenv";
import { View } from "react-native";
import styled from "styled-components/native";
import WeatherIcon from "components/common/weather-icon";
import CenteredRow from "components/common/centered-row";
import { SETTING_VALUES } from "constants/settings";
import { useFetch } from "api/fetch";
import { useStore } from "state";

const Root = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ImageContainer = styled.View`
  margin-bottom: 20px;
`;

const Temp = styled.Text`
  margin-right: 10px;
  font-size: 40px;
`;

const Statement = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Suggestion = styled.Text`
  font-size: 15px;
`;

const units = {
  [SETTING_VALUES.fahrenheit]: "us",
  [SETTING_VALUES.celsius]: "si"
};

const CurrentWeather = () => {
  const [{ coords, unit }] = useStore();
  const { latitude, longitude } = coords;

  const res = useFetch(
    `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}?units=${units[unit]}`
  );

  console.log(res.response);

  if (!res.response || res.error || res.response?.error) {
    return null;
  }

  return (
    <Root>
      <ImageContainer>
        <WeatherIcon type="sunny" size={128} />
      </ImageContainer>
      <CenteredRow>
        <Temp>{Math.floor(res.response.currently.temperature)}°</Temp>
        <View>
          <Statement>Sun's out guns out</Statement>
          <Suggestion>Tank top, shorts</Suggestion>
        </View>
      </CenteredRow>
    </Root>
  );
};

export default CurrentWeather;
