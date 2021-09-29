import React, { useEffect } from "react";
import TaskManage from "pages/TaskManage";
import TaskAnalysis from "pages/TaskAnalysis";
import { getData } from "Commuication/communications";
import Modal from "components/Modal";
import { useSelector } from "react-redux";

function App() {
  useEffect(() => {
    getData();
  }, []);

  const openModal = useSelector((state) => state);
  console.log(openModal);
  return (
    <>
      {openModal.showModal && (
        <Modal
          todo={openModal.todo}
          dueDate={openModal.duedate}
          status={openModal.status}
        />
      )}
      <TaskManage />
      <TaskAnalysis />
    </>
  );
}

export default App;
