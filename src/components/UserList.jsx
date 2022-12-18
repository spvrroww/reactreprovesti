import classes from './UserList.module.css'

const UserList = (props) => {

    const { users, onDeleteUser } = props

    return (
        <div className={classes['display-users']}>
            <h2>Users</h2>

            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.email}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td><button className={classes.button} type='button' onClick={onDeleteUser.bind(null, user.email)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList