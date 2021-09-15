import styled from "styled-components";
import devices from "styles/device";

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    padding-left: 15px;
    ${({ theme }) => theme.flexSet("space-between", "center", "row")}
  }
  @media ${({ theme }) => devices.device.desktop} {
    ${({ theme }) => theme.flexSet("space-around", "center", "row")}
  }
  width: 100%;
  height: 50px;
  box-shadow: 0px 5px 5px #00000010;
`;

const Logo = styled.h1`
  color: #4f953b;
  font-size: 30px;
  font-weight: bold;
`;

const DateLayout = styled.h3`
  @media ${({ theme }) => devices.device.mobile} {
    display: none;
  }
  color: #848484;
  font-size: 17px;
  font-weight: 500;
`;

const MenuLayout = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    display: none;
  }
  ${({ theme }) => theme.flexSet()}
  width: 12%;
  height: 100%;
`;
const Menu = styled.div`
  width: 100%;
  height: 100%;
  /* margin-right: 10px; */
  ${({ theme }) => theme.flexSet()}
  color: black;
  font-size: 15px;
  cursor: pointer;
  :hover {
    border-bottom: 5px solid #00000010;
  }
  border-bottom: ${(props) =>
    props.checked ? "5px solid green" : "5px solid white"};
`;

export const style = {
  Container,
  Logo,
  DateLayout,
  MenuLayout,
  Menu,
};
