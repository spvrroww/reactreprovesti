import { useState } from 'react';
import vesti from '../assets/images/wevestilogo.png';
import { validateEmail as validEmail } from '../utils/validateEmail';
import classes from './AddUser.module.css'

const AddUser = (props) => {

    const { onAddUser } = props

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (!validEmail(email)) {
                throw new Error('Please provide a valid email address')
            }

            onAddUser(firstName, lastName, email)

            setFirstName('')
            setLastName('')
            setEmail('')
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
                    <label htmlFor="text">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.entries}>
                    <label htmlFor="text">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.entries}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email"
                        placeholder="abc@wevesti.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                </div>
                <button type='submit' className={classes.button}>Submit</button>
            </form>
        </div>
    )
}

export default AddUser