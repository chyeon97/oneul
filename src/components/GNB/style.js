import styled from "styled-components";
import devices from "styles/device";

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
  }
  @media ${({ theme }) => devices.device.desktop} {
  }
  width: 100%;
  height: 50px;
  box-shadow: 0px 5px 5px #00000010;
  ${({ theme }) => theme.flexSet("space-around", "center", "row")}
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
  ${({ theme }) => theme.flexSet()}
  width: 10%;
  height: 100%;
  background-color: wheat;
`;
const Menu = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flexSet()}
  color: black;
  font-size: 15px;
  border-bottom: 10px solid black;
`;

export const style = {
  Container,
  Logo,
  DateLayout,
  MenuLayout,
  Menu,
};
