import React, { useState } from "react";
import { style } from "./style";
import "react-calendar/dist/Calendar.css";
import MyCalendar from "components/Calendar/Calendar";
import { insertData } from "Commuication/communications";

const Header = ({ setDatas }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, setValue] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };
  const onClickAdd = () => {
    insertData(inputValue, value, setDatas);
    setInputValue("");
  };
  return (
    <Container>
      <Input>
        <TodoInput
          value={inputValue}
          placeholder="할 일을 기입해주세요."
          onChange={onHandleChange}
        />
        <MyCalendar
          open={openCalendar}
          value={value}
          setOpenCalendar={setOpenCalendar}
          setValue={setValue}
        />
      </Input>
      <AddBtn onClick={onClickAdd}>추가</AddBtn>
    </Container>
  );
};
const { Container, Input, TodoInput, AddBtn } = style;
export default Header;
