import React from 'react'

function List(props) {
    return (
      <>
        {!props.animals ? (
          <div>Loading...</div>
        ) : props.animals.length > 0 ? (
          <ul>
            {props.animals.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        ) : (
          <div>There are no animals on the list!</div>
        )}
      </>
    );
  }

let animals = ["Lion", "Cow", "Snake", "Lizard", "Chicken"];


const Animals = () => {
  return (
    <div>
        <h1>Animals</h1>
        <ul>
            <List animals={animals}/>
        </ul>
    </div>
  )
}

export default Animals