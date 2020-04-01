import React from "react";
import styled from "styled-components/native";
import WeatherIcon from "../common/weather-icon";
import CenteredRow from "../common/centered-row";

const Root = styled.View`
  padding: 10px 10px 100px;
`;

const Entry = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Day = styled.Text`
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: bold;
  font-size: 16px;
  width: 50px;
`;

const IconContainer = styled.View`
  width: 40px;
`;

const Temp = styled.Text`
  font-size: 16px;
  width: 50px;
  margin-right: 10px;
  margin-left: 10px;
`;

const Suggestion = styled.Text`
  text-align: left;
`;

const WeekForecast = ({ data }) => {
  return (
    <Root>
      {data.map(({ day, temp, suggestion, sky }) => (
        <Entry key={day}>
          <CenteredRow>
            <Day>{day}</Day>
            <CenteredRow>
              <IconContainer>
                <WeatherIcon type={sky} />
              </IconContainer>
              <Temp>{temp}°</Temp>
            </CenteredRow>
          </CenteredRow>
          <Suggestion>{suggestion}</Suggestion>
        </Entry>
      ))}
    </Root>
  );
};

export default WeekForecast;
