import {createSlice} from "@reduxjs/toolkit";
import {getTasks} from "./tasks.actions";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTaskToState: (state, {payload: task}) => {
            state.push(task)
        },
        removeTaskFromState: (state, {payload: task}) => {
            return state.filter(element => element.id !== task.id)
        },
        updateTaskFromState: (state, action) => {
            const { id, newTask } = action.payload;
            const newTaskObj = {
                content: newTask
            }

            return state.map((task) => task.id === id ?
                { ...task, ...newTaskObj }
                : task)
        }
    },
    extraReducers: builder => {
        builder.addCase(getTasks.pending, state => {
            // add is loading
        })

        builder.addCase(getTasks.fulfilled, (state, action) => {
           return action.payload
        })
    }
})

export const {addTaskToState, removeTaskFromState, updateTaskFromState} = tasksSlice.actions
export default tasksSlice.reducer