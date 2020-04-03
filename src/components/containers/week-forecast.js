import React from "react";
import { View } from "react-native";
import { fromUnixTime, format } from "date-fns";
import styled from "styled-components/native";
import WeatherIcon from "components/common/weather-icon";
import CenteredRow from "components/common/centered-row";

const Root = styled.View`
  padding: 10px 10px 100px;
`;

const Entry = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Info = styled.View`
  margin-right: 10px;
`;

const Day = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  font-family: Plex-mono;
`;

const Temp = styled.Text`
  font-size: 22px;
  font-family: Plex-mono;
`;

const Summary = styled.Text`
  text-align: left;
  flex-wrap: wrap;
  font-family: Plex-sans;
  margin-left: 20px;
  width: 160px;
`;

const WeekForecast = ({ data }) => {
  return (
    <Root>
      {data.map(({ time, apparentTemperatureHigh, summary, icon }) => {
        const day = format(fromUnixTime(time), "E");
        return (
          <Entry key={time}>
            <CenteredRow>
              <Info>
                <Day>{day}</Day>
                <Temp>{Math.floor(apparentTemperatureHigh)}°</Temp>
              </Info>

              <WeatherIcon type={icon} size={40} />
            </CenteredRow>
            <Summary>{summary}</Summary>
          </Entry>
        );
      })}
    </Root>
  );
};

export default WeekForecast;
