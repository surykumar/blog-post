import React from 'react';

const Signin = (props) => {
    return (
        <div>
            <p>Hello please sign in!</p>
            <form onSubmit={props.onSubmit}>
                <input type="email" required placeholder="Email" name="email"/>
                <input type="password" required placeholder="password" name="password"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Signin;