import styled from "styled-components";
import devices from "styles/device";

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    height: 30vh;
  }
  width: 100%;
  height: 200px;
  /* background-color: wheat; */
  ${({ theme }) => theme.flexSet()}
`;

const Input = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 75%;
    height: 30%;
  }
  width: 40%;
  height: 20%;
  padding: 2px 10px;
  background-color: #cff09e;
  position: relative;
  border-radius: 5px;
  ${({ theme }) => theme.flexSet()};
`;

const TodoInput = styled.input`
  @media ${({ theme }) => devices.device.mobile} {
    width: 100%;
    height: auto;
  }
  width: 85%;
  font-size: 18px;
  color: black;
  padding-right: 5px;
  ${({ theme }) => theme.flexSet()}
`;

const CalendarBtn = styled.button`
  @media ${({ theme }) => devices.device.mobile} {
    width: 50%;
    padding: 2px;
  }
  display: flex;
  position: relative;
  width: 17%;
  height: 100%;
  border: 1px solid #3f4b3b;
  border-radius: 5px;
  color: black;
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 4px;
`;

const AddBtn = styled.button`
  @media ${({ theme }) => devices.device.mobile} {
    width: 14%;
    padding: 10px;
    height: 30%;
  }
  font-weight: bold;
  margin-left: 5px;
  width: 5%;
  height: auto;
  padding: 10px;
  /* border: 2px solid #3f4b3b; */
  border-radius: 5px;
  color: white;
  background-color: #3f4b3b;
  cursor: pointer;
`;

const test = styled.div`
  position: absolute;
  top: 0;
`;

export const style = {
  Container,
  Input,
  TodoInput,
  CalendarBtn,
  AddBtn,
  test,
};
