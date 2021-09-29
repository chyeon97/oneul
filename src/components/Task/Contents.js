/* eslint-disable no-template-curly-in-string */
import React from "react";
import Label from "components/Label";
import Item from "components/Item";
import { style } from "./styles";

const Contents = () => {
  return (
    <Container>
      {/* TODO */}
      <Box>
        <LabelLayout>
          <Label label={"TO DO"} color={"#DFDFDF"} />
        </LabelLayout>
        <Section>
          <Item color={"#f6b352"} value={"통신"} date={"2021/9/16"} />{" "}
          <Item
            color={"#f6b352"}
            value={"코딩 테스트 문제 풀기"}
            date={"2021/9/17"}
          />{" "}
          <Item color={"#f6b352"} value={"리액트 공부"} date={"2021/9/15"} />{" "}
          <Item color={"#f6b352"} value={"CORS 정리"} date={"2021/9/15"} />
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
