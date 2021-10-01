import React from "react";
import styled from "styled-components";
import devices from "styles/device";

const ProgressBar = ({ todos }) => {
  const getLabel = ["🌞 Morning", "🌆 Daytime", "🌃 Evening", "🌙 Night"];

  return (
    <Container>
      {[0, 1, 2, 3].map((id) => {
        return (
          <InnerContainer>
            <Label>{getLabel[id]}</Label>
            <Progress key={"test"} value={todos[id]} />
            <TaskPercent>{(todos[id] * 100).toFixed(1)}%</TaskPercent>
          </InnerContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.flexSet("flex-start", "flex-start", "column")}
  width: 90%;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  ${({ theme }) => theme.flexSet("space-around", "center", "row")}
  width: 100%;
  padding: 15px 0px;
`;

const Label = styled.h3`
  width: auto;
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const TaskCount = styled.h3`
  width: auto;
  color: black;
  font-size: 18px;
`;

const TaskPercent = styled.h3`
  width: auto;
  color: black;
  font-size: 18px;
`;

const Progress = styled.progress`
  @media ${({ theme }) => devices.device.mobile} {
    display: none;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 80%;
  height: 20px;
  border-radius: 7px;
  color: #35495e;
  ::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 8px;
  }
  ::-webkit-progress-value {
    background-color: #35495e;
    border-radius: 8px;
  }
  ::-moz-progress-bar {
    background-color: #eee;
    border-radius: 8px;
  }
`;

export default ProgressBar;
