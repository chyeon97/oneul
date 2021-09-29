import React, { useState } from "react";
import { style } from "./style";
import { convertDate } from "utils";
import PropTypes from "prop-types";

const GNB = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Logo>ONUEL</Logo>
      <MenuLayout></MenuLayout>
      <DateLayout>{convertDate(date)}</DateLayout>
    </Container>
  );
};

const { Container, Logo, DateLayout, Menu, MenuLayout } = style;

GNB.propTypes = {
  checked: PropTypes.bool,
};
export default GNB;
