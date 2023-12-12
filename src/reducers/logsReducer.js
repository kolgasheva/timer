import {ADD_LOG, CLEAR_LOGS} from '../actions/types';

const initialState = [];

const logsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOG:
            return [...state, action.payload];
        case CLEAR_LOGS:
            return [];
        default:
            return state;
    }
};

export default logsReducer;
