import React from "react";
import Checkbox from "components/Checkbox";
import { style } from "./style";

const Item = ({ color, value, date }) => {
  return (
    <Container>
      <Checkbox color={color} />
      <Contents readOnly value={value}></Contents>
      <EndDate color={color}>{date}</EndDate>
    </Container>
  );
};
const { Container, Contents, EndDate } = style;
export default Item;
