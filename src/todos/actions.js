export const CREATE_TO_DO = 'CREATE_TO_DO';
export const createToDo = (text) => ({
  type: CREATE_TO_DO,
  payload: { text },
});

export const REMOVE_TO_DO = 'REMOVE_TO_DO';
export const removeToDo = (text) => ({
  type: REMOVE_TO_DO,
  payload: { text },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});
