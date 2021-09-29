import React, { useEffect } from "react";
import TaskManage from "pages/TaskManage";
import TaskAnalysis from "pages/TaskAnalysis";
import { getData } from "Commuication/communications";

function App() {
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <TaskManage />
      <TaskAnalysis />
    </>
  );
}

export default App;
