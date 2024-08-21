import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled,(state,action) =>{
            state.isLoading=false;
            state.data = action.payload;
        })
        builder.addCase(fetchTodos.pending,(state,action) =>{
            state.isLoading=true;
        })
        builder.addCase(fetchTodos.rejected,(state,action) =>{
            state.isError=true;
        })

    }
})

export const fetchTodos = createAsyncThunk('fetchTodos', async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json();
})

export default todoSlice.reducer;