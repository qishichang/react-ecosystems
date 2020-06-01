import { CREATE_TO_DO, REMOVE_TO_DO } from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TO_DO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TO_DO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
