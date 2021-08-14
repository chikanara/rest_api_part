import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getUsers } from '../../js/action/userAction'
import UserCard from '../UserCard/UserCard'

const UserList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUsers())
        
    }, [])
    const {users,isLoading,error} = useSelector(state => state.userReducer)
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {
                isLoading ? <h1>Loading ...</h1> :
                users.map((user) => <UserCard user={user} key={user._id}/>)
            }
        </div>
    )
}

export default UserList
