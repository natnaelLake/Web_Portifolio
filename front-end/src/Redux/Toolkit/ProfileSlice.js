import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const  ProfileSlice = createSlice({
    name:'Profile',
    initialState:{},
    reducers:{
        addProfile:{},
        getProfile:{},
        updateProfile:{},
        deleteProfile:{},
    }

})

export const {addProfile,getProfile,updateProfile,deleteProfile} = ProfileSlice.actions
export default ProfileSlice.reducer;