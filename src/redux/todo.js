import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetch=createAsyncThunk('fetchapi',async()=>{
    const response = await fetch('https://fakestoreapi.com/products/1');
    return response.json();
})


const todoSlice=createSlice({
    name:"todo",
    initialState:{
        isLoading:false,
        data:null,


    },
    extraReducers:(builder)=>{
        builder.addCase(fetch.pending,(state,action)=>{
            state.isLoading=true;
            
        });
        builder.addCase(fetch.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetch.rejected,(state,action)=>{
          console.log('error',action.payload);
          state.isError=true;

        });
    },
});

export default todoSlice.reducer