import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import TodosContainer from './todos/TodosContainer';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <Headline headline="chayns® React + Redux Todo Example"/>
                <Intro intro="This is a very simple and basic example of how u can use chayns® and React + Redux together."/>
                <TodosContainer/>
            </div>
        );
    }
}

export default hot(module)(App);
