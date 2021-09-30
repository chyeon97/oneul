import React, { useEffect, useState } from "react";
import TaskManage from "pages/TaskManage";
import TaskAnalysis from "pages/TaskAnalysis";
import { getData } from "Commuication/communications";
import Modal from "components/Modal";
import { useSelector } from "react-redux";

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getData(setDatas);
  }, []);

  const openModal = useSelector((state) => state);
  return (
    <>
      {openModal.showModal && (
        <Modal
          todo={openModal.todo}
          dueDate={openModal.duedate}
          status={openModal.status}
        />
      )}
      <TaskManage todos={datas} setDatas={setDatas} />
      <TaskAnalysis />
    </>
  );
}

export default App;
