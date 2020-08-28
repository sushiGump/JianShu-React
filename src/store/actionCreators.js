import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST,
} from "./actionTypes";

export const getChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddTodoItem = () => ({ type: ADD_TODO_ITEM });

export const getDeleteTodoItem = (value) => ({ type: DELETE_TODO_ITEM, value });

export const initListAction = (data) => ({ type: INIT_LIST_ACTION, data });

export const getInitList = () => ({ type: GET_INIT_LIST });
