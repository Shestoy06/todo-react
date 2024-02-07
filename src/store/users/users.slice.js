import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, {payload: user}) => {
            state.push(user)
        }
    }
})

export const {addUser} = usersSlice.actions
export default usersSlice.reducer