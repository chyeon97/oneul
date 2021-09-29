import React from "react";
import styled from "styled-components";

const StateButton = ({ color, state }) => {
  return <Label color={color}>{state}</Label>;
};

const Container = styled.div`
  width: auto;
  height: auto;
  background-color: ${(props) => props.color};
`;

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
  :hover {
    border: 2px solid black;
  }
`;
export default StateButton;
