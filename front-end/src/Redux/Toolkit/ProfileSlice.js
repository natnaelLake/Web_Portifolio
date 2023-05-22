import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const  ProfileSlice = createSlice({
    name:'Profile',
    initialState:{
        profileData:null,
        user:null,
        errors:null
    },
    reducers:{
        addProfile:(state,action)=>{
            state.profileData = [action.payload,...state.profileData]
        },
        getProfile:(state,action)=>{

            state.profileData = action.payload
        },
        updateProfile:(state,action)=>{
            // state.profileData =state.profileData.map((update)=>{update._id === action.payload._id ? action.payload : update})
        },
        deleteProfile:{},
        loginUser:(state,action)=>{
            state.user = action.payload
        },
        addError:(state,action)=>{
            state.errors = action.payload
        }
    }

})

export const {addProfile,getProfile,updateProfile,deleteProfile,loginUser,addError} = ProfileSlice.actions
export default ProfileSlice.reducer;