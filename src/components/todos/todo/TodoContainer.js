import { connect } from 'react-redux';

// Selectors
import { getTodo } from '../../../redux-modules/todos/todo/selectors';

// Actions
import { toggleTodoChecked } from '../../../redux-modules/todos/todo/actions';
import { removeTodo } from '../../../redux-modules/todos/actions';

// Components
import Todo from './Todo';

// We receive the redux state and our given id from state and ownProps to get the correct data.
// It will be available as prop.
const mapStateToProps = () => (state, ownProps) => ({
    todo: getTodo(state, ownProps.id),
});

// We serve different functions for the TodoComponent to dispatch the different actions.
// They will be available as props.
const mapDispatchToProps = {
    toggleTodoChecked,
    removeTodo,
};

const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);

export default TodoContainer;
