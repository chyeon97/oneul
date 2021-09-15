import React from "react";
import GNB from "components/GNB";
import Head from "components/Header";
import styled from "styled-components";
import devices from "styles/device";
const TaskManage = () => {
  return (
    <>
      <GNB />
      <Body>
        <Head />
      </Body>
    </>
  );
};

const Body = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 100%;
  }
  width: 100%;
  height: auto;
  ${({ theme }) => theme.flexSet("space-around", "center", "row")}
`;

const Test = styled.div`
  width: 74.5%;
  height: 10px;
  background-color: blue;
`;
export default TaskManage;
