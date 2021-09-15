import React, { useState } from "react";
import { style } from "./style";
import { convertDate } from "./utils/convertDate";

const GNB = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Logo>ONUEL</Logo>
      <MenuLayout>
        <Menu>태스크 관리</Menu>

        <Menu>태스크 분석</Menu>
      </MenuLayout>
      <DateLayout>{convertDate(date)}</DateLayout>
    </Container>
  );
};

const { Container, Logo, DateLayout, Menu, MenuLayout } = style;
export default GNB;
