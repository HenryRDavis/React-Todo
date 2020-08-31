import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
p{
    color:green;
}
`

const Todo = (props) => {

return (
            <StyledDiv 
            onClick={() => props.toggleTask(props.item.id)}
            className={`item${props.item.completed ? "done" : ""}`}
            >
                <p>{props.item.name}</p>
            </StyledDiv>
        )
}

export default Todo