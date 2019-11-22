import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// chayns-components
import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import Input from 'chayns-components/lib/react-chayns-input/component/Input';

// Styles
import './add-todo.scss';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class AddTodo extends PureComponent {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = {
            newTodo: { text: '' },
        };
    }

    handleInputChange = (value) => this.setState({ newTodo: { text: value } });

    handleAddTodo = () => {
        const { addTodo } = this.props;
        const { newTodo } = this.state;

        if (newTodo.text.length > 0) {
            addTodo({
                ...newTodo,
                id: Math.random(),
                creationTime: Date.now(),
            });
        }

        this.setState({ newTodo: { text: '' } });
    };

    render() {
        const { newTodo } = this.state;

        return (
            <div className="add-todo">
                <Input
                    onChange={this.handleInputChange}
                    onEnter={this.handleAddTodo}
                    placeholder="Add todo"
                    value={newTodo.text}
                />
                <div className="add-todo__button-wrapper">
                    <Button
                        disabled={newTodo.text.length <= 0}
                        onClick={this.handleAddTodo}
                    >
                        Add
                    </Button>
                </div>
            </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
