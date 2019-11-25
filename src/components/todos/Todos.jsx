import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Shapes
import { TODO_SHAPE } from '../../constants/shapes';

// Containers
import AddTodoContainer from '../add-todo/AddTodoContainer';
import TodoContainer from './todo/TodoContainer';

// Components
import TodosHeadline from './todos-headline/TodosHeadline';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class Todos extends PureComponent {
    componentDidMount() {
        const { loadTodos } = this.props;

        loadTodos();
    }

    render() {
        const { todos } = this.props;

        const items = todos.map((todo) => (
            // We use the TodoContainer that manages the state/dispatches for the TodoComponent.
            // We pass the id, so the container can get the correct data from the redux state.
            <TodoContainer
                key={todo.id}
                id={todo.id}
            />
        ));

        return (
            <div className="todos">
                <TodosHeadline todos={todos}/>
                {items}
                <AddTodoContainer/>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(TODO_SHAPE)).isRequired,
    loadTodos: PropTypes.func.isRequired,
};

export default Todos;
