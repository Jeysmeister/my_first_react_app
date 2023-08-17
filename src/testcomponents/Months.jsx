import React from 'react'

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const ListItem = ({item, id}) => {
    return <li key={id}>{item} {id + 1}</li>
}

const List = () => {
    return (
        <ul>
            {months.map((month, index) => (
                <ListItem item={month} id={index} key={index}/>
            ))}
        </ul>
    )
}

const Months = () => {
  return (
    <List/>
  )
}

export default Months