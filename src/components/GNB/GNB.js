import React, { useState } from "react";
import { style } from "./style";
import { convertDate } from "utils";
import PropTypes from "prop-types";

const GNB = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Logo>ONUEL</Logo>
      <MenuLayout>
        <Menu checked={true}>태스크 관리</Menu>
        <Menu checked={false}>태스크 분석</Menu>
      </MenuLayout>
      <DateLayout>{convertDate(date)}</DateLayout>
    </Container>
  );
};

const { Container, Logo, DateLayout, Menu, MenuLayout } = style;

GNB.propTypes = {
  checked: PropTypes.bool,
};
export default GNB;
