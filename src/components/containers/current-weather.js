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

const CurrentWeather = () => {
  return (
    <Root>
      <ImageContainer>
        <WeatherIcon type="sunny" size={128} />
      </ImageContainer>
      <CenteredRow>
        <Temp>22°</Temp>
        <View>
          <Statement>Sun's out guns out</Statement>
          <Suggestion>Tank top, shorts</Suggestion>
        </View>
      </CenteredRow>
    </Root>
  );
};

export default CurrentWeather;
