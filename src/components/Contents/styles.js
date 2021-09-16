import styled from "styled-components";
import devices from "styles/device";

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    ${({ theme }) => theme.flexSet("center", "center", "column")}
    padding: 15px;
  }
  ${({ theme }) => theme.flexSet()}
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    margin: 10px 0px;
    height: 30vh;
    max-height: 300px;
    min-height: 300px;
  }
  ${({ theme }) => theme.flexSet("flex-start", "flex-start", "column")}
  padding: 15px;
  margin: 0px 15px;
  border: 1px solid black;
  width: 100%;
  max-height: calc(100vh - 50px - 20vh);
  min-height: calc(100vh - 50px - 20vh);
  border-radius: 5px;
`;

const LabelLayout = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
const Section = styled.section`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
`;

export const style = {
  Container,
  Box,
  Section,
  LabelLayout,
};
