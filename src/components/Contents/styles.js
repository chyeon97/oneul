import styled from "styled-components";
import devices from "styles/device";

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    ${({ theme }) => theme.flexSet("center", "center", "column")}
    height: 120vh;
    padding: 15px;
  }
  ${({ theme }) => theme.flexSet()}
  width: 100%;
  height: 70vh;
`;

const Box = styled.div`
  ${({ theme }) => theme.flexSet("flex-start", "flex-start", "column")}
  padding: 15px;
  margin: 15px;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 5px;
`;

const LabelLayout = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0px;
`;
const Section = styled.section`
  width: 100%;
  overflow-y: auto;
`;

const InnerBox = styled.div`
  ${({ theme }) => theme.flexSet("flex-start", "flex-start", "column")}
  padding: 10px;
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

export const style = {
  Container,
  Box,
  Section,
  InnerBox,
  LabelLayout,
};
