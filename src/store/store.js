import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users/users.slice";
import {tasksSlice} from "./tasks/tasks.slice";

const reducers = combineReducers({
    users: usersReducer,
    tasks: tasksSlice.reducer
})
export const store = configureStore({
    reducer: reducers,
})