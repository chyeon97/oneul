import React from "react";
import { style } from "./style";
const Checkbox = ({ color }) => {
  return (
    <Container color={color}>
      <HiddenCheckBox />
      <CheckBox>
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </CheckBox>
    </Container>
  );
};

const { Container, Icon, CheckBox, HiddenCheckBox } = style;
export default Checkbox;
