import React, { useState } from "react";
import Calendar from "react-calendar";
import { style } from "./style";
import { convertDate2 } from "utils";
import "react-calendar/dist/Calendar.css";
import MyCalendar from "components/Calendar/Calendar";

const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, setValue] = useState(new Date());

  return (
    <Container>
      <Input>
        <TodoInput placeholder="할 일을 기입해주세요." />
        <MyCalendar
          open={openCalendar}
          value={value}
          setOpenCalendar={setOpenCalendar}
          setValue={setValue}
        />
      </Input>
      <AddBtn>추가</AddBtn>
    </Container>
  );
};
const { Container, Input, TodoInput, AddBtn } = style;
export default Header;
