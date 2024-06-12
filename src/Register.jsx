import React, { useState } from 'react'

function Register() {
    const [details, setDetails] = useState({
        username:"",
        email:"",
        password:""
    })

    console.log(details);

    const handleRegister = () => {
        const {username, email, password} = details
        alert(`User Registerd Successfully with Username is ${username} and mail id as ${email} and password has ${password}`)
    }

  return (
    <>
        <h1 className='text-center text-primary'>User Register</h1>
        <form className='mt-4 border border-2 p-4 rounded-2 shadow'>
            <label className='text-secondary' htmlFor="uname">Username </label>
            <input id='uname' className='form-control w-100 border-primary' type="text" onChange={(e)=>setDetails({...details,username:e.target.value})} />
            <label className='text-secondary mt-2' htmlFor="mailid">E-mail Adress </label>
            <input id='mailid' className='form-control w-100 border-primary' type='email' onChange={(e)=>setDetails({...details,email:e.target.value})} />
            <label className='text-secondary mt-2' htmlFor="pswd">Password </label>
            <input id='pswd' className='form-control w-100 border-primary' type='password' onChange={(e)=>setDetails({...details,password:e.target.value})} />
            <div className='d-flex align-items-center justify-content-center mt-3'>
                <button type='button' className='btn btn-primary' onClick={handleRegister}>Register</button>
            </div>
        </form>
    </>
  )
}

export default Register