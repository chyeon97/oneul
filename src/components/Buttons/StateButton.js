import React from "react";
import styled from "styled-components";
import STATUS from "utils/convertStatus";

const StateButton = ({ color, state, checked, onClickStatus }) => {
  return (
    <Label color={color} checked={checked} onClick={() => onClickStatus(state)}>
      {STATUS[state - 1]}
    </Label>
  );
};

const Label = styled.button`
  margin: 10px;
  cursor: pointer;
  width: fit-content;
  font-size: 14px;
  color: #030303;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${(props) => props.color};
  border: ${(props) => props.checked && "2px solid black"};
  :hover {
    border: 2px solid black;
  }
`;
export default StateButton;
