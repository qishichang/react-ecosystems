import React from 'react';
import { connect } from 'react-redux';
import { removeToDo } from './actions';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = ({ todos = [{ text: 'Hello' }], onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeToDo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
