import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeToDo, markTodoAsCompleted } from './actions';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { loadTodos } from './thunks';

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
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeToDo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
