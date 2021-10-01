import React, { useState } from "react";
import { style } from "./style";

import { convertDateGNB } from "utils/convertDate";
import PropTypes from "prop-types";

const GNB = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Logo>ONUEL</Logo>
      <MenuLayout></MenuLayout>
      <DateLayout>{convertDateGNB(date)}</DateLayout>
    </Container>
  );
};

const { Container, Logo, DateLayout, MenuLayout } = style;

GNB.propTypes = {
  checked: PropTypes.bool,
};
export default GNB;
