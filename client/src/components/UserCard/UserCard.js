import React from 'react'
import {Card,Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../js/action/userAction'
import EditModal from '../EditModal/EditModal'
import  "./UserCard.css"

const UserCard = ({user}) => {
    const dispatch = useDispatch()

    return (
        <Card style={{ width: '18rem' }}>
        <p className="first">{user && user.name[0]}</p>
        <Card.Body>
          <Card.Title>{user.name + " " + user.lastName}</Card.Title>
          <Card.Text>
           {user.phone}
          </Card.Text>
          <Button variant="danger" onClick={() => dispatch(deleteUser(user._id))}>Delete</Button>
          <EditModal user={user}/>
        </Card.Body>
      </Card>
    )
}

export default UserCard
