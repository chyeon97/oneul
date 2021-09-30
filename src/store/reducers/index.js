import { OPEN_MODAL, CLOSE_MODAL } from "../type";

const INIT_STATE = {
  showModal: false,
};

export default function modals(state = INIT_STATE, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        todoId: action.todoId,
        todo: action.todo,
        duedate: action.duedate,
        status: action.status,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
