import React from 'react'
import Inputs from './Inputs'

const ExperienceFields = ({fieldState}) => {
  return (
    <div>
        <Inputs label={"Last Employer"} fieldState={fieldState}/>
        <Inputs label={"Position"} fieldState={fieldState}/>
        <div className='dates' style={{display:'flex'}} fieldState={fieldState}>
          <Inputs label={"Date Started"} fieldState={fieldState}/>
          <Inputs label={"Date Finished"} fieldState={fieldState}/>
        </div>
    </div>
  )
}

export default ExperienceFields