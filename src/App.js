import TaskManage from "pages/TaskManage";
import TaskAnalysis from "pages/TaskAnalysis";
import styled from "styled-components";
function App() {
  return (
    <>
      <TaskManage />
      <TaskAnalysis />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export default App;
