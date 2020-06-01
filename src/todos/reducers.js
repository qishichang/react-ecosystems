import { CREATE_TO_DO, REMOVE_TO_DO, MARK_TODO_AS_COMPLETED } from './actions';

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
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
