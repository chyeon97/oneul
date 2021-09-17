import React from "react";
import styled from "styled-components";
import WhoamI from "components/Analysis";
import devices from "styles/device";
const TaskAnalysis = () => {
  return (
    <Container>
      <WhoamI></WhoamI>
    </Container>
  );
};

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 95%;
  }
  ${({ theme }) => theme.flexSet("flex-start", "flex-start", "column")}
  width: 85%;
  max-height: 300px;
  margin: 0 auto;
  padding: 15px;
`;
export default TaskAnalysis;
