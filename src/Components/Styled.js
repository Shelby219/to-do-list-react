import styled from "styled-components"



export const Container = styled.div `
margin: 0 auto;
margin-top: 50px;
text-align: center;     
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
font-size: 1em;
padding: 20px;
max-width: 400px;
border: 1px solid black;
font-family: 'Xanh Mono', monospace;

.todo-list {
  padding: 10px;
  .todo{
    padding: 10px; 
    text-align: left;
    
   
   
  }
  form{
    text-align: left;
  }
  button{
      margin-left: 15px;
      float: right;
  }
}
`


