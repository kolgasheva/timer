import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    logs: [],
};

const logsReducer = createSlice({
    name: 'logsReducer',
    initialState,
    reducers: {
        addLog: (state, action) => {
            state.logs = [...state.logs, action.payload]
        },
        clearLogs: (state) => {
            state.logs = []
        },
    },
});

export const { addLog, clearLogs } = logsReducer.actions;
export default logsReducer.reducer;