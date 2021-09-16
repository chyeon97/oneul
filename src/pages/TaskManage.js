import React from "react";
import GNB from "components/GNB";
import Head from "components/Header";
import Contents from "components/Contents";
import styled from "styled-components";

const TaskManage = () => {
  return (
    <Container>
      <GNB />
      <Body>
        <Head />
        <Contents></Contents>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
  ${({ theme }) => theme.flexSet("space-around", "center", "column")}
`;

export default TaskManage;
