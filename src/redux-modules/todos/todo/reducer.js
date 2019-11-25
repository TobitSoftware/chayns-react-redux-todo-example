import produce from 'immer';

import { SET_TODO_NAME, TOGGLE_TODO_CHECKED } from './types';

const initialState = {
    creationTime: null,
    text: null,
    id: null,
};

// eslint-disable-next-line consistent-return
export default (baseState = initialState, action) => produce(baseState, (draftState) => {
    if (draftState.id !== action.id) {
        return;
    }

    switch (action.type) {
        case SET_TODO_NAME:
            draftState.name = action.name;
            break;
        case TOGGLE_TODO_CHECKED:
            draftState.checked = !draftState.checked;
            break;
        default:
            break;
    }
});
