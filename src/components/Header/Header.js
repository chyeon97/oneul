import React, { useState } from "react";
import Calendar from "react-calendar";
import { style } from "./style";
import { convertDate2 } from "utils";
import "react-calendar/dist/Calendar.css";

const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, setValue] = useState(new Date());
  const onDateClick = () => {
    setOpenCalendar(true);
  };

  const onChange = (date) => {
    setValue(date);
    setOpenCalendar(false);
  };

  return (
    <Container>
      <Input>
        <TodoInput placeholder="할 일을 기입해주세요." />
        <CalendarBtn onClick={onDateClick}>
          🗓 &nbsp; {convertDate2(value)}
        </CalendarBtn>
        {openCalendar && <Calendar value={value} onChange={onChange} />}
        {/* <Calendar /> */}
      </Input>
      <AddBtn>추가</AddBtn>
    </Container>
  );
};
const { Container, Input, TodoInput, CalendarBtn, AddBtn } = style;
export default Header;
