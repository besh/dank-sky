import React from "react";
import styled from "styled-components/native";

const Root = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CenteredRow = ({ children }) => {
  return <Root>{children}</Root>;
};

export default CenteredRow;
