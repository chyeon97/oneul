import { OPEN_MODAL, CLOSE_MODAL } from "../type";

export const openModal = (todo, duedate, status) => {
  return {
    type: OPEN_MODAL,
    todo,
    duedate,
    status,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
