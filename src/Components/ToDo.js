import React from 'react';
 
const ToDo = ({todo, completeTask}) => {
    return (
        <div className={todo.complete ? "strike" : ""}>
            {todo.task}
            <button key={todo} style={{margin: '10px'}} onClick={completeTask}>Completed</button>
        </div>
    );
 };
 
export default ToDo;