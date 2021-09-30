import styled from "styled-components";
import devices from "styles/device";

const Wrap = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #8a8a8ab3;
`;
const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 100%;
    padding: 2px;
    font-size: 12px;
    margin-left: -50%;
  }
  position: fixed;
  width: 500px;
  padding: 15px 30px;
  top: 36%;
  left: 50%;
  margin-left: -150px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
`;

const InnerContainer = styled.div`
  ${({ theme }) => theme.flexSet("flex-start", "center", "row")}
  width:100%;
  height: auto;
  padding: 5px;
`;

const Label = styled.h2`
  font-size: 15px;
  padding: 15px;
  font-weight: bold;
`;
const TodoInput = styled.input`
  width: 80%;
  height: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const ButtonLayout = styled.div`
  ${({ theme }) => theme.flexSet()}
  width:100%;
  height: auto;
`;
export const style = {
  Wrap,
  Container,
  InnerContainer,
  Label,
  TodoInput,
  ButtonLayout,
};
