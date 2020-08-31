// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'
import styled from 'styled-components'

const StyledButton = styled.div`
button{
  background-color:seagreen;
  border: 2px solid black;
  color: white;
  padding: 0.5% 2%;
  text-align: center;
  font-size: 1rem;
  &:hover{
      background-color: lightseagreen;
      color:black;
  }
}
`
const TodoList = (props) => {

        return (
            <div>
                {props.tasks.map((item) => (
                    <Todo
                    key={item.id}
                    item={item}
                    toggleTask={props.toggleTask}
                    />
                ))}
                <br/>
            <StyledButton>
                <button onClick={props.clearFinished}>
                    Clear Tasks
                </button>
            </StyledButton>
            </div>
        )
}

export default TodoList
