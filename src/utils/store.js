import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { IS_PRODUCTION } from '../constants/environment';

import rootReducer from '../redux-modules/root';

export default (persistedState) => {
    const middlewares = [thunk];

    if (!IS_PRODUCTION) {
        middlewares.push(createLogger({ collapsed: true, duration: true }));
    }

    return createStore(
        rootReducer,
        persistedState,
        applyMiddleware(...middlewares),
    );
};
