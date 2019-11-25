import { connect } from 'react-redux';

// Actions
import { addTodo } from '../../redux-modules/todos/actions';

// Components
import AddTodo from './AddTodo';

const mapDispatchToProps = {
    addTodo,
};

const AddTodoContainer = connect(
    null,
    mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
