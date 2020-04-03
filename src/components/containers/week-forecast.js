import React from "react";
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

const Day = styled.Text`
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: bold;
  font-size: 16px;
  width: 40px;
`;

const IconContainer = styled.View`
  width: 35px;
`;

const Temp = styled.Text`
  font-size: 16px;
  margin-right: 10px;
  margin-left: 10px;
  width: 40px;
`;

const Summary = styled.Text`
  text-align: left;
  width: 140px;
  flex-wrap: wrap;
`;

const WeekForecast = ({ data }) => {
  return (
    <Root>
      {data.map(({ time, apparentTemperatureHigh, summary, icon }) => {
        const day = format(fromUnixTime(time), "E");
        return (
          <Entry key={time}>
            <CenteredRow>
              <Day>{day}</Day>
              <CenteredRow>
                <IconContainer>
                  <WeatherIcon type={icon} size={28} />
                </IconContainer>
                <Temp>{Math.floor(apparentTemperatureHigh)}°</Temp>
              </CenteredRow>
            </CenteredRow>
            <Summary>{summary}</Summary>
          </Entry>
        );
      })}
    </Root>
  );
};

export default WeekForecast;
