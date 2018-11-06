import { connect } from 'react-redux';
import { handleToggleTodoChecked } from '../../../actions/todo';
import { handleRemoveTodo } from '../../../actions/todos';
import Todo from './Todo';

// We receive the redux state and our given id from state and ownProps to get the correct data.
// It will be available as prop.
const mapStateToProps = () => (state, ownProps) => ({
    todo: state.todos.find(todo => todo.get('id') === ownProps.id)
});

// We serve different functions for the TodoComponent to dispatch the different actions.
// They will be available as props.
const mapDispatchToProps = () => dispatch => ({
    toggleTodoChecked: id => dispatch(handleToggleTodoChecked(id)),
    removeTodo: id => dispatch(handleRemoveTodo(id)),
});

const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);

export default TodoContainer;
