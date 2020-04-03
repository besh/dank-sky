import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import WeatherIcon from "components/common/weather-icon";
import CenteredRow from "components/common/centered-row";

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

const CurrentWeather = ({ data }) => {
  const { icon, temperature, summary } = data;

  return (
    <Root>
      <ImageContainer>
        <WeatherIcon type={icon} size={100} />
      </ImageContainer>
      <CenteredRow>
        <Temp>{Math.floor(temperature)}°</Temp>
        <View>
          <Statement>{summary}</Statement>
          <Suggestion>Tank top, shorts</Suggestion>
        </View>
      </CenteredRow>
    </Root>
  );
};

export default CurrentWeather;
