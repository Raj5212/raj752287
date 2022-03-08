import React from 'react';
import Head from './Head';
import { useState } from 'react';




const SignupForm = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loginInfo = () => {
        const data = { userId, password, email }
        fetch("http://3.38.209.173:5000/api/v1/auth/signup", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.log("resp",resp);;
            resp.json().then((result) => {
                console.warn("result", result)
            })
        })
    }
    return (
        <div>
          <Head/>
            <div className='container'>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <form>
                <label className="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required
                    value={email}
                    autoComplete="off"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <label className="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                    value={password}
                    autoComplete="off"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <label className="psw-repeat"><b>User Name</b></label>
                <input type="text" placeholder="User Id" name="psw-repeat" required
                    value={userId}
                    autoComplete="off"
                    onChange={(e) => { setUserId(e.target.value) }}
                />
                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn" onClick={loginInfo}>Sign Up</button>
                </div>
                </form>
              
            </div>
        </div>
    )
}

export default SignupForm;