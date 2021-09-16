import styled from "styled-components";

const Container = styled.div`
  visibility: ${(props) => props.color === "#C0C0C0" && "hidden"};
  display: contents;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckBox = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background: black;
  border-radius: 50%;
  margin-right: 10px;
  ${Icon} {
    visibility: visible;
  }
`;

const HiddenCheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const style = { Container, Icon, CheckBox, HiddenCheckBox };
