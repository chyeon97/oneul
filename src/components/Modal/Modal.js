import MyCalendar from "components/Calendar";
import React, { useState } from "react";
import { style } from "./Modalstyles";
import { StateButton, MyButton } from "components/Buttons";
import { useDispatch } from "react-redux";
import { closeModal } from "store/actions";
import { updateData } from "Commuication/communications";

const Modal = ({ todoId, todo, dueDate, status, setDatas }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(new Date(dueDate));
  const [reviseStatus, setReviseStatus] = useState(status);
  const [reviseTodoName, setReviseTodoName] = useState(todo);
  const dispatch = useDispatch();
  const onChangeTodoName = (e) => {
    setReviseTodoName(e.target.value);
  };
  const onClickStatus = (e) => {
    setReviseStatus(e);
  };

  const onCancelClick = () => {
    return dispatch(closeModal());
  };

  const onReverseClick = () => {
    updateData(
      todoId,
      reviseStatus,
      reviseTodoName,
      date,
      new Date(),
      setDatas
    );
    return dispatch(closeModal());
  };
  return (
    <Wrap>
      <Container>
        <InnerContainer>
          <Label>할 일</Label>
          <TodoInput
            value={reviseTodoName}
            onChange={onChangeTodoName}
          ></TodoInput>
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
          <StateButton
            type="radio"
            color="#C4C4C4"
            state={1}
            checked={reviseStatus === 1 && true}
            onClickStatus={onClickStatus}
          />
          <StateButton
            type="radio"
            color="#ABD0CE"
            state={2}
            onClickStatus={onClickStatus}
            checked={reviseStatus === 2 && true}
          />
          <StateButton
            type="radio"
            color="#C5E99B"
            state={3}
            onClickStatus={onClickStatus}
            checked={reviseStatus === 3 && true}
          />
        </InnerContainer>
        <ButtonLayout>
          <MyButton
            bgcolor="#C4C4C4"
            color="white"
            label="취소"
            onClick={onCancelClick}
          />
          <MyButton
            bgcolor="#FFFFFF"
            color="black"
            label="확인"
            onClick={onReverseClick}
          />
        </ButtonLayout>
      </Container>
    </Wrap>
  );
};

const { Wrap, Container, InnerContainer, TodoInput, Label, ButtonLayout } =
  style;
export default Modal;
