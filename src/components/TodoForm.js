import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
button{
  background-color:seagreen;
  border: 2px solid black;
  color: white;
  text-align: center;
  &:hover{
      background-color: lightseagreen;
      color:black;
  }
}
`
class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            item: '', 
        }
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value,
        })
        console.log(this.state);
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addTask(this.state.item);
    }

    render() {
        return (
            <StyledDiv>
            <form onSubmit={this.submitHandler}>
                <input
                name='item'
                type='text'
                value={this.state.item}
                placeholder='What do you need to do today?'
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
            </StyledDiv>
        )
    }
}

export default TodoForm