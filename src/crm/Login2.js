// import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
// import { useMutation } from 'react-query';

const Login2 = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [select, setSelect] = useState("");

    const loginInfo = () => {
        const data = { userId, password, select }
        // console.log(data);
        fetch("https://shielded-brushlands-86830.herokuapp.com/employee/login", {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "x-rapidapi-key": "apikey",
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                name: this.state.name,
                notes: this.state.notes
            })
        })
            .then(response => response.json(data))
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });
        useEffect(() => {
            loginInfo();

        });

        return <>
            <div className='container'>
                <div className='outer_main'>
                    <h2 className='login-form-signin h2.login-form-signin-heading'> Login2</h2>
                    <form className='login-warp'
                        onSubmit={loginInfo()}>
                        <div className='login-wrap'>
                            <input type="text" placeholder="User ID" className="form-control" required name="userId"
                                autoComplete='off'
                                value={userId}
                                onChange={(e) => { setUserId(e.target.value) }}


                            />
                            <br />
                            <input type="password"
                                placeholder="Password"
                                className="form-control" required
                                name="password"
                                autoComplete='off'
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}

                            />
                            <br />
                            <select name="designation" className="select" name="select" required
                                value={select}
                                onChange={(e) => { setSelect(e.target.value) }}
                            >
                                <option value="0">Select Designation</option>
                                <option value="2">Programmer</option>
                                <option value="3">Web Designer</option>
                                <option value="4">Business Analyst &amp; Business Development Executive</option>
                                <option value="7">Android Developer</option>
                                <option value="8">Project Manager</option>
                                <option value="10">HR Executive</option>
                                <option value="11">Management</option>
                                <option value="16">SEO/Digital Marketing</option>
                                <option value="17">Tester</option>
                                <option value="18">IOS Developer</option>
                                <option value="19">Team Leader</option>
                                <option value="20">Sales Team Leader</option>
                            </select>
                            <br />
                            <label className="checkbox">
                                <input type="checkbox" value="remember-me" name="remember" /> Remember me
                                <span className="pull-right">
                                    <a href="http://codenomad.co//home/forgot_password/" data-toggle="modal"> Forgot Password?</a></span>
                            </label>
                            <br />
                            <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={{ loginInfo }}>Sign in</button>

                        </div>

                    </form>

                </div>
            </div>



        </>;
    };
};
export default Login2;



















// // import { useFormik } from 'formik';
// import React, { useEffect, useState } from 'react';
// // import { useMutation } from 'react-query';

// const Login2 = () => {
//     const [userId, setUserId] = useState("");
//     const [password, setPassword] = useState("");
//     const [select, setSelect] = useState("");

//     const loginInfo = () => {
//     const data = { userId, password, select }
//         console.log(data);
//         setError(null);
//             setLoading(true);
//             axios.post('https://shielded-brushlands-86830.herokuapp.com/employee/login', { username: username.value, password: password.value }).then(response => {
//             setLoading(false);
//             setUserSession(response.data.token, response.data.user);
//             props.history.push('/dashboard');
//             }).catch(error => {
//             setLoading(false);
//             if (error.response.status === 401) setError(error.response.data.message);
//             else setError("Something went wrong. Please try again later.");
//             });
//         }
//     }
// useEffect(()=>{
//     loginInfo();
// })

//     return <>
//         <div className='container'>
//             <div className='outer_main'>
//                 <h2 className='login-form-signin h2.login-form-signin-heading'> Login2</h2>
//                 <form className='login-warp'
//                 onSubmit={loginInfo()}
//                 >
//                     <div className='login-wrap'>
//                         <input type="text" placeholder="User ID" className="form-control" required name="userId"
//                             autoComplete='off'
//                             value={userId}
//                             onChange={(e) => { setUserId(e.target.value) }}


//                         />
//                         <br />
//                         <input type="password"
//                             placeholder="Password"
//                             className="form-control" required
//                             name="password"
//                             autoComplete='off'
//                             value={password}
//                             onChange={(e) => { setPassword(e.target.value) }}

//                         />
//                         <br />
//                         <select name="designation" className="select" name="select" required
//                             value={select}
//                             onChange={(e) => { setSelect(e.target.value) }}
//                         >
//                             <option value="0">Select Designation</option>
//                             <option value="2">Programmer</option>
//                             <option value="3">Web Designer</option>
//                             <option value="4">Business Analyst &amp; Business Development Executive</option>
//                             <option value="7">Android Developer</option>
//                             <option value="8">Project Manager</option>
//                             <option value="10">HR Executive</option>
//                             <option value="11">Management</option>
//                             <option value="16">SEO/Digital Marketing</option>
//                             <option value="17">Tester</option>
//                             <option value="18">IOS Developer</option>
//                             <option value="19">Team Leader</option>
//                             <option value="20">Sales Team Leader</option>
//                         </select>
//                         <br />
//                         <label className="checkbox">
//                             <input type="checkbox" value="remember-me" name="remember" /> Remember me
//                             <span className="pull-right">
//                                 <a href="http://codenomad.co//home/forgot_password/" data-toggle="modal"> Forgot Password?</a></span>
//                         </label>
//                         <br />
//                         <button type="submit"  className="btn btn-lg btn-primary btn-block">Sign in</button>

//                     </div>

//                 </form>

//             </div>
//         </div>



//     </>;
// };

// export default Login2;


//     let data = {userId,password,select}
//  fetch("https://shielded-brushlands-86830.herokuapp.com/employee/register",{
//      method="post"})
//      .then(res=>res.json(data))
//     .then(data=> new Promise((resolve, reject)=>{
//       if(data.access_token){
//         resolve(data)
//       } else {
//         reject(data)
//       }
//      headers:
//      {
//     'Accepet':'Application/Json',
//     'content-type':'Application/Json'
//      },
//      body:JSON.stringify(data)
//  }).then((result)=>{
//      console.warn(result);

//  })


//     const [userLogin,setUserLogin]=useState({
// Userid: "",
// password:"",
// select :""


//     })

// const handelIput=(e) =>{
//     const name = e.target.Userid;
//    const value= e.target.value;
// }

// setUserLogin({...userLogin})
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }







// import React from 'react';
// import { useFormik } from 'formik';

// const SignupForm = () => {
//   // Note that we have to initialize ALL of fields with values. These
//   // could come from props, but since we don’t want to prefill this form,
//   // we just use an empty string. If we don’t do this, React will yell
//   // at us.
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default SignupForm