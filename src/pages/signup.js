import React from 'react';

const Signup = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" required placeholder="First Name" name="firstName"/>
            <input type="text" required placeholder="Last Name" name="lastName"/>
            <input type="email" required placeholder="Email" name="email"/>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default Signup;