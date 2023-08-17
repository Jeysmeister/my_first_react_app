import React, { useState } from 'react'

const Person = () => {

    const [userInput, setUserInput] = useState("")
    const UpdateUserInput = (event) => {
        console.log(userInput)
        setUserInput(event.target.value)
    }

    return (
        <>
            {userInput}
            <input type='text' value={userInput} onChange={(event) => UpdateUserInput(event)}>
            </input>
        </>
    )
}

export default Person