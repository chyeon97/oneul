import axios from "axios";
import { baseURL } from "./Constants";

export async function getData(setDatas) {
  await axios
    .get(baseURL + "/todo")
    .then((resolve) => setDatas(resolve.data))
    .catch((error) => console.log(error));
}
