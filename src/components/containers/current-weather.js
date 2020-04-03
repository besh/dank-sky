import React from "react";
import { View } from "react-native";
import { faToCe, getClothingSuggestion } from "../../utils/temperature";
import { SETTING_VALUES } from "constants/settings";
import { useStore } from "state";
import styled from "styled-components/native";
import WeatherIcon from "components/common/weather-icon";
import CenteredRow from "components/common/centered-row";

const Root = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 40px;
  background: black;
`;

const ImageContainer = styled.View`
  margin-bottom: 20px;
`;

const Temp = styled.Text`
  margin-right: 10px;
  font-size: 46px;
  font-family: Plex-mono;
  color: white;
`;

const Statement = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: Plex-sans;
  color: white;
`;

const Suggestion = styled.Text`
  font-size: 15px;
  font-family: Plex-sans;
  color: white;
`;

const CurrentWeather = ({ data }) => {
  const [{ unit }] = useStore();
  const { icon, temperature, summary } = data;

  let _temp = temperature;

  if (unit === SETTING_VALUES.fahrenheit) {
    _temp = faToCe(_temp);
  }

  const suggestion = getClothingSuggestion(_temp);

  return (
    <Root>
      <ImageContainer>
        <WeatherIcon type={icon} size={100} />
      </ImageContainer>
      <CenteredRow>
        <Temp>{Math.floor(temperature)}°</Temp>
        <View>
          <Statement>{summary}</Statement>
          <Suggestion>{suggestion}</Suggestion>
        </View>
      </CenteredRow>
    </Root>
  );
};

export default CurrentWeather;
