import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const  ProfileSlice = createSlice({
    name:'Profile',
    initialState:{
        profileData:null
    },
    reducers:{
        addProfile:(state,action)=>{
            state.profileData = [action.payload,...state.profileData]
        },
        getProfile:(state,action)=>{

            state.profileData = action.payload
        },
        updateProfile:(state,action)=>{
            state.profileData =state.profileData.map((update)=>{update._id === action.payload._id ? action.payload : update})
        },
        deleteProfile:{},
    }

})

export const {addProfile,getProfile,updateProfile,deleteProfile} = ProfileSlice.actions
export default ProfileSlice.reducer;