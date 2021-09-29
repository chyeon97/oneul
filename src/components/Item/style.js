import styled from "styled-components";

const Container = styled.div`
  ${({ theme }) => theme.flexSet("space-around", "center", "row")}
  width: 100%;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 2px 10px;
`;

const Contents = styled.input`
  ${({ theme }) => theme.flexSet("flex-start", "center", "row")}
  width: 70%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const EndDate = styled.h2`
  ${({ theme }) => theme.flexSet("center", "center", "column")}
  width: 30%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
  color: ${(props) => props.color};
`;

export const style = { Container, Contents, EndDate };
