/* eslint-disable no-template-curly-in-string */
import React from "react";
import Label from "components/Label";
import Item from "components/Item";
import { style } from "./styles";
// import convertEndDate, { convertDate2 } from "utils/convertDate3";
import * as convert from "utils/convertDate";
const Contents = ({ todos }) => {
  return (
    <Container>
      {/* TODO */}
      <Box>
        <LabelLayout>
          <Label label={"TO DO"} color={"#DFDFDF"} />
        </LabelLayout>
        <Section>
          {todos
            ? todos.map((todo) => {
                return (
                  todo.completed === 1 && (
                    <Item
                      key={todo.id}
                      id={todo.id}
                      color={"#f6b352"}
                      value={todo.todoName}
                      status={todo.completed}
                      date={convert.convertDate(new Date(todo.dueDate))}
                    ></Item>
                  )
                );
              })
            : null}
        </Section>
      </Box>
      {/* IN PROGRESS */}
      <Box>
        <Label label={"IN PROGRESS"} color={"#ABD0CE"} />
        <Section>
          {todos
            ? todos.map((todo) => {
                return (
                  todo.completed === 2 && (
                    <Item
                      key={todo.id}
                      id={todo.id}
                      status={todo.completed}
                      color={"#f6b352"}
                      value={todo.todoName}
                      date={convert.convertDate(new Date(todo.dueDate))}
                    ></Item>
                  )
                );
              })
            : null}
        </Section>
      </Box>
      {/* DONE */}
      <Box>
        <Label label={"DONE"} color={"#C5E99B"} />
        <Section>
          {todos
            ? todos.map((todo) => {
                return (
                  todo.completed === 3 && (
                    <Item
                      key={todo.id}
                      id={todo.id}
                      color={"#C0C0C0"}
                      value={todo.todoName}
                      status={todo.completed}
                      date={convert.convertEndDate(new Date(todo.endDate))}
                    ></Item>
                  )
                );
              })
            : null}
        </Section>
      </Box>
    </Container>
  );
};

const { Container, Box, Section, LabelLayout } = style;
export default Contents;
