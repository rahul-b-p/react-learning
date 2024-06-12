import React, { useState } from 'react'

function Example({sub,age}) {
  const [concept,setConcept] =useState("hooks concept")

  console.log(concept);
  // console.log(props);

  // function without argument
  const buttonclick =() =>{
    alert('button clicked')
  }

  // function with argument
  const addUser = (uname) =>{
    alert(`${uname} added successfully`)
  }

  const getName =(e)=>{
    console.log(e.target.value);
  }

  return (
    <>
      <div>Example</div>
     {   sub=='REACT'?
        <p className='text-success fs-3 fw-bolder'>data shared is {sub}</p>
        :
        <p className='text-danger fs-3 fw-bolder'>data shared is not REACT</p>}


      { age==27 &&
        <p className='fw-bolder fs-2'>data shared is : {age}</p>
      }

      <p>Initial value of state is {concept}</p>
      <button className='btn btn-secondary mb-4' onClick={()=>setConcept('next.js')}>State Change</button>
      <br />
      <button className='btn btn-primary' onClick={buttonclick}>CLICK</button>
      <button className='btn btn-success ms-5' onClick={()=>addUser('kevin')}>CLICK</button>

      <div className="d-flex mt-4">
        <input type="text" placeholder='course' className='form-control w-25' onChange={(e)=>getName(e)}/>
      </div>
    </>
  )
}

export default Example