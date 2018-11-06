import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import TodoContainer from './todo/TodoContainer';
import AddTodoContainer from '../add-todo/AddTodoContainer';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class Todos extends PureComponent {
    // We extract the complex logic to render the headline for a more readable render()
    renderTodosHeadline = () => {
        const { todos } = this.props;

        const todoCount = todos.size;
        const checkedTodosCount = todos.filter(todo => todo.get('checked')).size;
        const headlineString = `
             ${checkedTodosCount > 0 ? checkedTodosCount : ''}
             ${checkedTodosCount > 0 && todoCount > 0 ? '/' : ''} 
             ${todoCount > 0 ? todoCount : ''} ${todoCount === 1 && checkedTodosCount <= 0 ? 'Todo' : 'Todos'} 
             ${checkedTodosCount > 0 ? 'abgeschlossen' : ''}
        `;

        return <h2>{headlineString}</h2>;
    };

    render() {
        const { todos } = this.props;

        return (
            <div className="todos">
                {this.renderTodosHeadline()}
                {todos.map(todo => (
                    // We use the TodoContainer that manages the state/dispatches for the TodoComponent.
                    // We pass the id, so the container can get the correct data from the redux state.
                    <TodoContainer
                        key={todo.get('id')}
                        id={todo.get('id')}
                    />
                ))}
                <AddTodoContainer/>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.instanceOf(List).isRequired
};

export default Todos;
