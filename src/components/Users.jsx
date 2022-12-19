import { useReducer } from 'react';
import AddUser from './AddUser';
import classes from './Users.module.css'

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          firstName: '',
          lastName: '',
          email: ''
        }
      ]
    case 'delete':
      state.splice(action.payload, 1);
      return [...state]
    case 'update':
      state[action.payload.index] = {
        ...state[action.payload.index],
        [action.payload.key]: action.payload.value
      }
      return [...state]
    default:
      throw new Error();
  }
}
const Users = () => {


  const [users, dispatch] = useReducer(usersReducer, [{ firstName: '', lastName: '', email: '' }]);

  const addUserHandler = (index, email) => {

    try {
      const foundIndex = users.findIndex(user => user.email.toLowerCase() === email.toLowerCase())
      if (foundIndex !== -1 && foundIndex !== index) {
        throw new Error('User with that email already exists')
      }

      dispatch({ type: 'add' })
    } catch (error) {
      alert(error.message)
    }

  }

  const updateUserHandler = (index, key, value) => {
    dispatch({
      type: 'update',
      payload: {
        index,
        key,
        value
      }
    })
  }

  const deleteUserHandler = (index) => {
    dispatch({ type: 'delete', payload: index })
  }

  return (
    <div className={classes.container}>
      {
        users.map((user, index) => {
          return <AddUser
            onAddUser={addUserHandler}
            onUpdateUser={updateUserHandler}
            onDeleteUser={deleteUserHandler}
            index={index}
            key={index}
            user={user}
            isLast={index === users.length - 1}
            totalUsers={users.length}
          />
        })
      }
    </div>
  );
};

export default Users;
