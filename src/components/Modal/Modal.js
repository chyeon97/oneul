import MyCalendar from "components/Calendar";
import React, { useState } from "react";
import { style } from "./Modalstyles";
import { StateButton, MyButton } from "components/Buttons";

const Modal = ({ todo, dueDate, status }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(new Date(dueDate));
  return (
    <Wrap>
      <Container>
        <InnerContainer>
          <Label>할 일</Label>
          <TodoInput defaultValue={todo}></TodoInput>
        </InnerContainer>
        <InnerContainer>
          <Label>목표일</Label>
          <MyCalendar
            open={openCalendar}
            value={date}
            setOpenCalendar={setOpenCalendar}
            setValue={setDate}
          />
        </InnerContainer>
        <InnerContainer>
          <Label>상태</Label>
          <StateButton color="#C4C4C4" state="TODO" />
          <StateButton color="#ABD0CE" state="IN PROGRESS" />
          <StateButton color="#C5E99B" state="DONE" />
        </InnerContainer>
        <ButtonLayout>
          <MyButton bgcolor="#C4C4C4" color="white" label="취소" />
          <MyButton bgcolor="#FFFFFF" color="black" label="확인" />
        </ButtonLayout>
      </Container>
    </Wrap>
  );
};

const { Wrap, Container, InnerContainer, TodoInput, Label, ButtonLayout } =
  style;
export default Modal;
