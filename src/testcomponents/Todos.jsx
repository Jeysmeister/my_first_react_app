import { v4 as uuid } from 'uuid';

const todos = [
    {task : "now the yard", id: uuid()},
    {task : "Work on Odin Projects", id: uuid()},
    {task : "feed the cat", id: uuid()},
]

function TodoList() {
    return (
        <>
        <ul>
          {todos.map((todo) => (
            // here we are using the already generated id as the key.
            <li key={todo.id}>{todo.task} {todo.id}</li>
          ))}
        </ul>
        </>
    ) 
  }

export default TodoList