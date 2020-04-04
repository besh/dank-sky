import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import WeatherIcon from "./weather-icon";

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

const WeatherSnapshot = ({ temperature, feels, icon, summary, suggestion }) => {
  return (
    <Root>
      <ImageContainer>
        <WeatherIcon type={icon} size={100} />
      </ImageContainer>
      <Row>
        <TempContainer>
          <Temp>{temperature}</Temp>
          {temperature !== feels && <Feels>Feels {feels}</Feels>}
        </TempContainer>

        <View>
          <Statement>{summary}</Statement>
          <Suggestion>{suggestion}</Suggestion>
        </View>
      </Row>
    </Root>
  );
};

export default WeatherSnapshot;
