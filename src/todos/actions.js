export const CREATE_TO_DO = 'CREATE_TO_DO';
export const createToDo = (todo) => ({
  type: CREATE_TO_DO,
  payload: { todo },
});

export const REMOVE_TO_DO = 'REMOVE_TO_DO';
export const removeToDo = (todo) => ({
  type: REMOVE_TO_DO,
  payload: { todo },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = (todo) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { todo },
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
