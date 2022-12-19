import { useState } from 'react';
import vesti from '../assets/images/wevestilogo.png';
import { validateEmail as validEmail } from '../utils/validateEmail';
import classes from './AddUser.module.css'

const AddUser = (props) => {

    const { onAddUser, onDeleteUser, onUpdateUser, index, user, isLast, totalUsers } = props

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (!validEmail(user.email)) {
                throw new Error('Please provide a valid email address')
            }

            onAddUser(index, user.email)

        } catch (error) {
            alert(error.message)
        }


    };

    return (
        <div className={classes.formwrapper}>
            <div className={classes['img-wrap']}>
                <img src={vesti} alt="vesti-logo" />
            </div>
            <h2>Users Log Page</h2>
            <form onSubmit={handleSubmit}>
                <div className={classes.entries}>
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={user.firstName}
                        onChange={(e) => onUpdateUser(index, 'firstName', e.target.value)}
                        required
                    />
                </div>
                <div className={classes.entries}>
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={user.lastName}
                        onChange={(e) => onUpdateUser(index, 'lastName', e.target.value)}
                        required
                    />
                </div>
                <div className={classes.entries}>
                    <label htmlFor="email">Email</label>
                    <input
                        name='email'
                        type="email"
                        placeholder="abc@wevesti.com"
                        value={user.email}
                        onChange={(e) => onUpdateUser(index, 'email', e.target.value)}
                        required
                    />
                </div>

                {
                    isLast && (<button type='submit' className={classes.button}> Add user </button>)
                }

                {
                    totalUsers > 1 && (<button type='button' className={classes.button} onClick={onDeleteUser.bind(null, index)}> Delete </button>)
                }
            </form>
        </div>
    )
}

export default AddUser