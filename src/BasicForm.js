import React, { useState } from 'react'

const BasicForm = () => {
    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        comment: "",
      };
    
const [inputValues,setInputValues]=useState(initialValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    console.log({inputValues})
  };

    return (
        <>
            <div>
                <div>
                    <input className='fname' type={'text'} name={'fname'} placeholder={"Enter your First Name"} onChange={handleInputChange}/>
                </div>
                <div>
                    <input className='lname' type={"text"} name={'lname'} placeholder={"Enter your Lirst Name"} onChange={handleInputChange} />
                </div>
                <div>
                    <input className='email' type={'email'} name={'email'} placeholder={"Enter your Email"} onChange={handleInputChange} />
                </div>
                <div>
                    <input className='pasword' type={'password'} name={'password'} placeholder={"Enter your Password"} onChange={handleInputChange} autoComplete={"off"} />
                </div>
                <div>
                    <input className='comment' type={'text'} name={'message'} placeholder={"Enter your Message"}  onChange={handleInputChange}/>
                </div>
                <button className='btn btn-success'>Sumbit</button>

            </div>
        </>
    )
}

export default BasicForm