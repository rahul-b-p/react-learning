import React, { useState } from 'react'

function Newcomp() {
    
    const [color, setColor] =useState({
        color1 : 'RED',
        color2 : 'YELLOW',
        color3 : 'GREEN'
    })


  return (
    <>
    <div>Colours</div>
    <ul>
        <li>{color.color1}</li>
        <li>{color.color2}</li>
        <li>{color.color3}</li>
    </ul>
    <button className='btn btn-warning' onClick={()=>setColor({...color,color2:'BLUE'})}>Change</button>
    </>
   
  )
}

export default Newcomp