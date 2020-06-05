import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { getTodos, getTodosLoading } from './selectors';

const TodoList = ({
  todos = [{ text: 'Hello' }],
  isLoading,
  onRemovePressed,
  onCompletedPressed,
  startLoadTodos,
}) => {
  useEffect(() => {
    startLoadTodos();
  }, []);
  const loadingMessage = <div>Loading</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
