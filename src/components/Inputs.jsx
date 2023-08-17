import React from 'react'
import { TextField, Typography } from '@mui/material'

const Inputs = ({label, fieldState}) => {
  return (
    <div>
        <TextField disabled={fieldState} style={{margin: "5px"}} label={label} variant="filled" size='small' fullWidth/>
    </div>
  )
}

export default Inputs