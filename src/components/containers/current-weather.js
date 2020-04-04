import React from "react";
import { View, Text } from "react-native";
import {
  faToCe,
  getClothingSuggestion,
  parseTemperature,
} from "../../utils/temperature";
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

const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

const TempContainer = styled.View`
  margin-right: 10px;
`;

const Temp = styled.Text`
  font-size: 52px;
  font-family: Plex-mono;
  color: white;
  line-height: 52px;
`;

const Feels = styled.Text`
  font-size: 14px;
  font-family: Plex-mono;
  color: white;
  margin-top: -5px;
`;

const Statement = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: Plex-sans;
  color: white;
  margin-bottom: 2px;
`;

const Suggestion = styled.Text`
  font-size: 15px;
  font-family: Plex-sans;
  color: white;
`;

const CurrentWeather = ({ data }) => {
  const [{ unit }] = useStore();
  const { icon, temperature, summary, apparentTemperature } = data;

  let _temp = temperature;

  if (unit === SETTING_VALUES.fahrenheit) {
    _temp = faToCe(_temp);
  }

  const suggestion = getClothingSuggestion(_temp);
  const parsedTemperature = parseTemperature(temperature);
  const parsedFeelsTemperature = parseTemperature(apparentTemperature);
  const shouldDisplayFeelsMessage =
    parsedTemperature !== parsedFeelsTemperature;

  return (
    <Root>
      <ImageContainer>
        <WeatherIcon type={icon} size={100} />
      </ImageContainer>
      <Row>
        <TempContainer>
          <Temp>{parsedTemperature}</Temp>
          {shouldDisplayFeelsMessage && (
            <Feels>Feels {parsedFeelsTemperature}</Feels>
          )}
        </TempContainer>

        <View>
          <Statement>{summary}</Statement>
          <Suggestion>{suggestion}</Suggestion>
        </View>
      </Row>
    </Root>
  );
};

export default CurrentWeather;
