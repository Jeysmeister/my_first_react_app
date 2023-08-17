import React from 'react'
import Inputs from './Inputs'

const GeneralFields = ({fieldState}) => {
  return (
    <div>
      <div className='name' style={{display:"flex"}}>
        <Inputs label="First Name" fieldState={fieldState}/>
        <Inputs label="Last Name" fieldState={fieldState}/>
      </div>
        <Inputs label="Email" fieldState={fieldState}/>
        <Inputs label="Phone Number" fieldState={fieldState}/>
    </div>
  )
}

export default GeneralFields