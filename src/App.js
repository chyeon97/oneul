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

  const getTimeSlot = (hour) => {
    if (hour >= 6 && hour < 10) {
      // 아침
      return 0;
    } else if (hour >= 10 && hour < 19) {
      // 낮
      return 1;
    } else if (hour >= 19 && hour < 22) {
      // 저녁
      return 2;
    } else {
      return 3;
    }
  };

  const DoneDatas = React.useMemo(() => {
    const Dones = datas.filter((todo) => todo.completed === 3);
    let temp = [0, 0, 0, 0];
    Dones.forEach((e) => {
      let hour = new Date(e.endDate).getHours();
      temp[getTimeSlot(hour)] += 1;
    });
    let percent = temp.map((e) => {
      return e / Dones.length;
    });
    console.log(percent);
    return percent;
  }, [datas]);

  return (
    <>
      {openModal.showModal && (
        <Modal
          todoId={openModal.todoId}
          todo={openModal.todo}
          dueDate={openModal.duedate}
          status={openModal.status}
          setDatas={setDatas}
        />
      )}
      <TaskManage todos={datas} setDatas={setDatas} />
      <TaskAnalysis todos={DoneDatas} />
    </>
  );
}

export default App;
