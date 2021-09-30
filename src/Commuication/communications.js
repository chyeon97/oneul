import axios from "axios";
import { baseURL } from "./Constants";

export async function getData(setDatas) {
  await axios
    .get(baseURL + "/todo")
    .then((resolve) => {
      console.log(resolve.data);
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
