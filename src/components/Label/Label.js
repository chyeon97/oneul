import React from "react";
import styled from "styled-components";

const Label = ({ label, color }) => {
  return <Tag color={color}>{label}</Tag>;
};

const Tag = styled.h2`
  width: fit-content;
  font-size: 14px;
  color: #030303;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${(props) => props.color};
`;
export default Label;
