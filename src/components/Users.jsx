import { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import classes from './Users.module.css'

const Users = () => {


  const [users, setUsers] = useState([]);

  const addUserHandler = (firstName, lastName, email) => {

    try {
      const emailExist = users.findIndex(user => user.email.toLowerCase() === email.toLowerCase())
      if (emailExist !== -1) {
        throw new Error('User with that email already exists')
      }

      setUsers(currentUsers => {
        const clonedUsers = [...currentUsers]

        clonedUsers.push({
          firstName,
          lastName,
          email
        })

        return clonedUsers
      })
    } catch (error) {
      alert(error.message)
    }

  }

  const deleteUserHandler = (email) => {
    setUsers(currentUsers => {
      return currentUsers.filter(user => user.email.toLowerCase() !== email.toLowerCase())
    })
  }

  return (
    <div className={classes.container}>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
};

export default Users;
