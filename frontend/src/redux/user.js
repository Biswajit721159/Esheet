import { createSlice } from '@reduxjs/toolkit';
const users=createSlice({
    name:'users',
    initialState: null,
    reducers:{
        setUsers:(state,action)=>{
            return action.payload;
        }
    }
})
export const {setUsers}=users.actions;
export default users.reducer;