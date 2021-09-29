import styled from "styled-components";
import devices from "styles/device";

const Container = styled.div`
  width: 100%;
  height: 20vh;
  ${({ theme }) => theme.flexSet()}
`;

const Input = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 75%;
    height: 50px;
  }
  width: 40%;
  height: 50px;
  padding: 2px 10px;
  background-color: #cff09e;
  position: relative;
  z-index: 0;
  border-radius: 5px;
  ${({ theme }) => theme.flexSet()};
`;

const TodoInput = styled.input`
  @media ${({ theme }) => devices.device.mobile} {
    width: 100%;
    height: 100%;
  }
  width: 85%;
  font-size: 18px;
  color: black;
  padding-right: 5px;
  ${({ theme }) => theme.flexSet()}
`;

const AddBtn = styled.button`
  @media ${({ theme }) => devices.device.mobile} {
    width: 14%;
    padding: 10px;
    height: 50px;
  }
  font-weight: bold;
  margin-left: 5px;
  width: 5%;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: #3f4b3b;
  cursor: pointer;
`;

export const style = {
  Container,
  Input,
  TodoInput,

  AddBtn,
};
