import React from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./CalendarStyle.css";
import { convertDate2 } from "utils";
import styled from "styled-components";
import devices from "styles/device";

const MyCalendar = ({ open, value, setOpenCalendar, setValue }) => {
  const onDateClick = () => {
    setOpenCalendar(true);
  };

  const onChange = (date) => {
    setValue(date);
    setOpenCalendar(false);
  };

  return (
    <Container>
      <CalendarBtn onClick={onDateClick}>
        🗓 &nbsp;
        {convertDate2(value)}
      </CalendarBtn>
      {open && <Calendar value={value} onChange={onChange} />}
    </Container>
  );
};

export default MyCalendar;

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 25%;
  }
  width: 120px;
`;
const CalendarBtn = styled.button`
  @media ${({ theme }) => devices.device.mobile} {
    width: auto;
    paddin: 2px;
    font-size: 12px;
  }
  ${({ theme }) => theme.flexSet()}
  display: flex;
  position: relative;
  z-index: 0;
  width: 100%;
  border: 1px solid #3f4b3b;
  border-radius: 5px;
  color: black;
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 2px;
`;
