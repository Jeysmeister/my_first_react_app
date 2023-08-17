import React from 'react'
import Inputs from './Inputs'

const StudyFields = ({fieldState}) => {
  return (
    <div>
        <Inputs label={"Highest Educational Attainment"} fieldState={fieldState}/>
        <Inputs label={"Institution"} fieldState={fieldState}/>
      <div className='dates' style={{display:'flex'}}>
        <Inputs label={"Date Started"} fieldState={fieldState}/>
        <Inputs label={"Date Ended"} fieldState={fieldState}/>
      </div>
    </div>
  )
}

export default StudyFields