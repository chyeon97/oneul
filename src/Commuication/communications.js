import axios from "axios";
import { baseURL } from "./Constants";

export async function getData() {
  await axios
    .get(baseURL + "/todo")
    .then((resolve) => console.log(resolve.data))
    .catch((error) => console.log(error));
}
