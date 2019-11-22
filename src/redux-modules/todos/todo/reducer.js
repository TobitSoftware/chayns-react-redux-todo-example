import produce from 'immer';

import { SET_TODO_NAME, TOGGLE_TODO_CHECKED } from './types';

const initialState = {};

// eslint-disable-next-line consistent-return
export default (state = initialState, action) => produce(state, (draft) => {
    if (draft.id !== action.id) {
        return;
    }

    switch (action.type) {
        case SET_TODO_NAME:
            draft.name = action.name;
            break;
        case TOGGLE_TODO_CHECKED:
            draft.checked = !draft.checked;
            break;
        default:
            break;
    }
});
