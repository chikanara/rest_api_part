import axios from "axios"

import { ADD_USER, ADD_USER_FAIL, ADD_USER_SUCCESS, DELETE_USER, DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_USERS, GET_USERS_FAIL, GET_USER_SUCCESS, UPDATE_USER, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS } from "../const"

export const getUsers = () => async(dispatch) => {
    dispatch({type:GET_USERS})
    try {
        const {data} = await axios.get("/api/contacts")
        dispatch({type:GET_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_USERS_FAIL,payload:error.response.data})
    }
}

export const addUser = (user) => async(dispatch) => {
   dispatch({type:ADD_USER})
   try {
       const {data} = await axios.post("/api/add_contact",user)
       dispatch({type:ADD_USER_SUCCESS,payload:data})
   } catch (error) {
       dispatch({type:ADD_USER_FAIL,payload:error.response.data})
   }
}

export const updateUser = (id,modif) => async(dispatch) => {
    dispatch({type:UPDATE_USER})
    try {
        const {data} = await axios.put("/api/contacts/"+id,modif)
        dispatch({type:UPDATE_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_USER_FAIL,payload:error.response.data})
    }
 }

 export const deleteUser = (id) => async(dispatch) => {
    dispatch({type:DELETE_USER})
    try {
        const {data} =await axios.delete("/api/contacts/"+id)
        dispatch({type:DELETE_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_USER_FAIL,payload:error.response.data})
    }
 }