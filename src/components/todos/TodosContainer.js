import { connect } from 'react-redux';
import Todos from './Todos';

const mapStateToProps = () => state => ({
    todos: state.todos
});

const TodosContainer = connect(
    mapStateToProps,
    null
)(Todos);

export default TodosContainer;
