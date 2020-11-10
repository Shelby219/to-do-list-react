import React, { useState } from 'react';
import {Container} from './Components/Styled'
import Header from './Components/Header'
import data from "./data.json";
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

import "./style.css"


function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
 
  const completeTask= (toDo) => {
    let copy = [...toDoList];
    copy[toDo].complete = true;
    setToDoList(copy);
    console.log(toDo)
    };

return (
    <Container>
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} completeTask={completeTask}/>
      <ToDoForm addTask={addTask}/>
    </Container>
  );
}

// //FUNCTIONS
// function Todo({ todo, index, completeTodo, removeTodo }) {

//   return (
//     <div
//       className="todo"
//       style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
//     >
//       {todo.text}  
//       <button onClick={() => removeTodo(index)}>x</button>
//       <button onClick={() => completeTodo(index)}>Complete</button>
       
    
//     </div>
//   );
// }

// function TodoForm({ addTodo }) {
//   const [value, setValue] = React.useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}
//       />
//       <button type="submit" value="Add"> Add </button>
//     </form>
//   );
// }

// //APPLICATION 
// function App() {
//   const [todos, setTodos] = React.useState([
//     {
//       text: "Test Note",
//       isCompleted: false
//     }
//   ]);

//   const addTodo = text => {
//     const newTodos = [...todos, { text }];
//     setTodos(newTodos);
//   };

//   const completeTodo = index => {
//     const newTodos = [...todos];
//     newTodos[index].isCompleted = true;
//     setTodos(newTodos);
//   };

//   const removeTodo = index => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <Container>
//     <h1>To Do List</h1>
//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}
//           />
//         ))}
//         <TodoForm addTodo={addTodo} />
//       </div>
//     </Container>
//   );
// }


export default App

