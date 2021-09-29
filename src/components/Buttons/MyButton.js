import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "store/actions";
import styled from "styled-components";

const MyButton = ({ bgcolor, color, label }) => {
  const dispatch = useDispatch();
  const onClickModal = (label) => {
    switch (label) {
      case label === "취소":
        return dispatch(closeModal());
      default:
        return dispatch(closeModal());
    }
  };
  return (
    <Container bgcolor={bgcolor} color={color} onClick={onClickModal}>
      {label}
    </Container>
  );
};

const Container = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 10px 30px;
  font-size: 17px;
  font-weight: bold;
  width: auto;
  height: auto;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  border-radius: 5px;
  border: 1px solid black;
`;

export default MyButton;
