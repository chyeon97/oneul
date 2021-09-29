import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "store/actions";
import { style } from "./style";

const Item = ({ color, value, date }) => {
  const dispatch = useDispatch();
  return (
    <Container onClick={() => dispatch(openModal(value, date, "Done"))}>
      <Contents readOnly value={value}></Contents>
      <EndDate color={color}>{date}</EndDate>
    </Container>
  );
};
const { Container, Contents, EndDate } = style;
export default Item;
