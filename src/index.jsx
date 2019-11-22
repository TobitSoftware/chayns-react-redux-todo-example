import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// Constants
import { IS_DEVELOPMENT } from './constants/environment';

// Utils
import configureStore from './utils/store';

// Components
import App, { HotApp } from './components/App';

// Create redux store
const store = configureStore();

// Get root element
const tappElement = document.querySelector('.tapp');

// We render the given component into the root element
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            {IS_DEVELOPMENT ? (
                <HotApp/>
            ) : (
                <App/>
            )}
        </Provider>,
        tappElement,
    );
};

// Call render function after chayns is ready
chayns.ready.then(render).catch((error) => {
    // eslint-disable-next-line no-console
    console.warn('No chayns environment found.', error);
});
