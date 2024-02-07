import {createAsyncThunk} from "@reduxjs/toolkit";
import async from "async";
import axios from "axios";

export const getTasks =
    createAsyncThunk('tasks',
    async(name) => {
        const response = await axios.get(`https://fast-waters-54416-e453cccbfee4.herokuapp.com/api/author/${name}/tasks`)
        return response.data
    } )