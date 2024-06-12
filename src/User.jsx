import React, { useState } from 'react'

function User() {
    const [userDetails, setUserDetails] = useState([
        {username:'neel', age:'27', designation:'frontend developer'},
        {username:'max', age:'20', designation:'backend developer'},
        {username:'nithin', age:'29', designation:'fullstack developer'},
        {username:'nivya', age:'30', designation:'HR'}
    ])
  return (
    <>
        <h1 className='text-center text-primary'>User Table</h1>
        <div className='d-flex align-items-center justify-content-center'>
            <table className='table table-success rounded-0 border border-2 border-dark w-75 mt-3 shadow'>
                <thead className='text-center'>
                    <tr>
                        <th className='border-2'>Sl No</th >
                        <th className='border-2'>Name</th>
                        <th className='border-2'>Age</th>
                        <th className='border-2'>Designation</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {userDetails.map((item,index)=>(<tr>
                        <td className='border-1'>{index+1}</td>
                        <td className='border-1'>{item.username}</td>
                        <td className='border-1'>{item.age}</td>
                        <td className='border-1'>{item.designation}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default User