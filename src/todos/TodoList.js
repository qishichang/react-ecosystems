import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks';
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from './selectors';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
  incompleteTodos,
  completedTodos,
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
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete: </h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed: </h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  incompleteTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
