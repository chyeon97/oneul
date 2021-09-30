/* eslint-disable no-template-curly-in-string */
import React from "react";
import Label from "components/Label";
import Item from "components/Item";
import { style } from "./styles";
import { convertDate2 } from "utils";

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
                console.log(todo);
                return (
                  <Item
                    color={"#f6b352"}
                    value={todo.todoName}
                    date={convertDate2(new Date(todo.dueDate))}
                  ></Item>
                );
              })
            : null}
        </Section>
      </Box>
      {/* IN PROGRESS */}
      <Box>
        <Label label={"IN PROGRESS"} color={"#ABD0CE"} />
        <Section></Section>
      </Box>
      {/* DONE */}
      <Box>
        <Label label={"DONE"} color={"#C5E99B"} />
        <Section>
          <Item
            color={"#C0C0C0"}
            value={"TestDoneTestDoneTestDoneTestDoneTestDoneTestDone"}
            date={["2021.09.15", <br />, "AM 10:30"]}
          />
        </Section>
      </Box>
    </Container>
  );
};

const { Container, Box, Section, LabelLayout } = style;
export default Contents;
