import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import styled from 'styled-components'

const StyledDiv = styled.div`
display:flex;
flex-direction:column;
`
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo: [], 
    }
  }

  addTask = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(), 
      completed: false, 
      toggleTask: () => {},
    }

    this.setState({
      toDo: [...this.state.toDo, newItem]
    })
  }

  clearTasks = (item) => {
    this.setState({
      toDo: this.state.toDo.filter((item) => {
        return item.completed === false
      })
    })
  }

  toggleTask = (clickedItemID) => {
    debugger
    this.setState({
      toDo: this.state.toDo.map((item) => {
        if (item.id === clickedItemID) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <StyledDiv>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.toDo} toggleTask={this.toggleTask} clearTasks={this.clearTasks}/>
      </StyledDiv>
    );
  }
}

export default App;