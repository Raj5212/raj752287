import React from 'react';
import Head from './Head';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate();


    const login = async () => {
        const data = { email, password }
        await fetch("http://3.38.209.173:5000/api/v1/auth/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.log("resp", resp);;
            resp.json().then((result) => {
                console.warn("result", result);
                localStorage.setItem('token', result.data.token);
                navigate("/UserData");

            })
        })
    }
    return (
        <div>
          <Head/>
            <div className='container'>
                <h1>login</h1>
                <p>Please fill in this form to login account.</p>
                <hr />
                <label className="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required
                    value={email}
                    autoComplete="off"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <label className="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <div className="clearfix">
                    <button type="submit" className="signupbtn" onClick={login}>Log-in</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;