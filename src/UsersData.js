import React from 'react';
import Head from './Head';
import { useState } from 'react';




const LoginForm = () => {


    const login = async () => {
        const data = { email, password }
        await fetch("http://3.38.209.173:5000/api/v1/auth/users", {
            method: "GET",
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
                var token = getToken(req.headers);
                if (token) {
                  Post.create(req.body, function(err, post) {
                    if (err) return next(err);
                     resp.json(post);
                    });
                  } else {
                   return res.status(403).send({ success: false, msg: "Unauthorized." });
                  }
               
                  console.log(resp);

            })
        })
    }
    return (
       <>

       </>
    );
};

export default LoginForm;