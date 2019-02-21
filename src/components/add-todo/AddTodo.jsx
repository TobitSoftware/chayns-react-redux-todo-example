import React, { PureComponent } from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import Input from 'chayns-components/lib/react-chayns-input/component/Input';
import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import './addTodo.scss';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class AddTodo extends PureComponent {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = {
            newTodo: Map({
                todo: '',
            })
        };
    }

    handleInputChange = (value) => {
        const { newTodo } = this.state;

        this.setState({
            newTodo: newTodo.set('todo', value)
        });
    };

    handleAddTodo = () => {
        const { addTodo } = this.props;
        const { newTodo } = this.state;

        if (newTodo.get('todo').length > 0) {
            addTodo(
                newTodo
                    .set('id', Math.random())
                    .set('creationTime', Date.now())
            );
        }

        this.setState({
            newTodo: newTodo.set('todo', '')
        });
    };

    render() {
        const { newTodo } = this.state;

        return (
            <div className="add-todo">
                <Input
                    value={newTodo.get('todo')}
                    onChange={this.handleInputChange}
                    placeholder="add todo"
                    onEnter={this.handleAddTodo}
                />
                <Button
                    className="add-todo__button"
                    onClick={this.handleAddTodo}
                    disabled={newTodo.get('todo').length <= 0}
                >
                    +
                </Button>
            </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
