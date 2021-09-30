import axios from "axios";
import { baseURL } from "./Constants";

export async function getData(setDatas) {
  await axios
    .get(baseURL + "/todo")
    .then((resolve) => {
      console.log(resolve);
      setDatas(resolve.data);
    })
    .catch((error) => console.log(error));
}

export async function insertData(todoName, dueDate, setDatas) {
  await axios
    .post(baseURL + "/todo", {
      todoName: todoName,
      dueDate: dueDate,
      completed: 1,
    })
    .then((resolve) => getData(setDatas))
    .catch((error) => console.log(error));
}

export async function updateData(
  todoId,
  completed,
  todoName,
  dueDate,
  endDate,
  setDatas
) {
  await axios
    .put(baseURL + "/todo/" + todoId, {
      completed: completed,
      todoName: todoName,
      dueDate: new Date(dueDate),
      endDate: completed === 3 ? endDate : null,
    })
    .then((resolve) => getData(setDatas))
    .catch((error) => console.log(error));
}
