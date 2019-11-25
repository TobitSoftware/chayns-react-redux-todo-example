import { connect } from 'react-redux';

// Selectors
import { getTodos } from '../../redux-modules/todos/selectors';

// Actions
import { loadTodos } from '../../redux-modules/todos/actions';

// Components
import Todos from './Todos';

const mapStateToProps = () => (state) => ({
    todos: getTodos(state),
});

const mapDispatchToProps = {
    loadTodos,
};

const TodosContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todos);

export default TodosContainer;
