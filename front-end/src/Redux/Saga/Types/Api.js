import axios from "axios";

export const getProfileDataAPI = async ()=> await axios.get('http://localhost:5500/getData');
export const postProfileDataAPI = async (sendFile)=> {
    const data =  await axios.post('http://localhost:5500/addData',sendFile)
    console.log('data in the api ',data)
   return data
};
export const deleteProfileDataAPI = async (id)=> axios.delete('http:localhost:5500/deleteData/'+id);
export const updateProfileDataAPI = async (id)=> axios.patch('http:localhost:5500/updateData/'+id);