import React from "react";
import GNB from "components/GNB";
import Head from "components/Header";
import Contents from "components/Task";
import styled from "styled-components";
import devices from "styles/device";

const TaskManage = ({ todos }) => {
  return (
    <Container>
      <GNB />
      <Body>
        <Head />
        <Contents todos={todos}></Contents>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 95%;
  }
  width: 85%;
  height: auto;
  margin: 0 auto;
  ${({ theme }) => theme.flexSet("space-around", "center", "column")}
`;

export default TaskManage;
