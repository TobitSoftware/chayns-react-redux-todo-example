import { connect } from 'react-redux';
import { handleAddTodo } from '../../actions/todos';
import AddTodo from './AddTodo';

const mapDispatchToProps = () => dispatch => ({
    addTodo: todo => dispatch(handleAddTodo(todo))
});

const AddTodoContainer = connect(
    null,
    mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
