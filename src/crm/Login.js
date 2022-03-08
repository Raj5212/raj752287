import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';


const Login = () => {
    const formik = useFormik({
        initialValues: {
            userId: '',
            password: '',
            selector: '',
        },
    });

      
    const loginInfo=()=>{
       console.log(Login)
    }



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


    return <>
        <div className='container'>
            <div className='outer_main'>
                <h2 className='login-form-signin h2.login-form-signin-heading'> Login</h2>
                <form action='get' className='login-warp'
                // onSubmit={validateForm()}
                >
                    <div className='login-wrap'>
                        <input type="text" placeholder="User ID" className="form-control" required name="userId"
                            autoComplete='off'
                            onChange={formik.handleChange}
                            value={formik.values.userId}

                        />
                        <br />
                        <input type="password"
                            placeholder="Password"
                            className="form-control" required
                            name="password"
                            autoComplete='off'
                            onChange={formik.handleChange}
                            value={formik.values.password}

                        />
                        <br />
                        <select name="designation" className="select" name="selector" required
                            onChange={formik.handleChange}
                            value={formik.values.selector}
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
                        <button type="submit" onClick={loginInfo()} className="btn btn-lg btn-primary btn-block">Sign in</button>

                    </div>

                </form>

            </div>
        </div>



    </>;
};

export default Login;