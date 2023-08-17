import React, { useState } from 'react'

const States = () => {
    const COLORS = ["pink", "green", "blue", "yellow", "purple"];
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0])
  return (
    <div style={{backgroundColor}}>
        {COLORS.map((color) => (
            <button onClick={() => {setBackgroundColor(color)}}>{color}</button>
        ))}
    </div>
  )
}

export default States