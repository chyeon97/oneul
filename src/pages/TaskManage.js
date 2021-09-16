import React from "react";
import GNB from "components/GNB";
import Head from "components/Header";
import Contents from "components/Contents";
import styled from "styled-components";
import devices from "styles/device";
const TaskManage = () => {
  return (
    <>
      <GNB />
      <Body>
        <Head />
        <Contents></Contents>
      </Body>
    </>
  );
};

const Body = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 100%;
    min-height: auto;
  }
  width: 100%;
  /* min-height: calc(100vh - 50px); */
  ${({ theme }) => theme.flexSet("space-around", "center", "column")}
`;

const Test = styled.div`
  width: 74.5%;
  height: 10px;
  background-color: blue;
`;
export default TaskManage;
