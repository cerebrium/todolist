import React from 'react';
import './App.css';
import './ListItem';
import ListItem from './ListItem';

class App extends React.Component {

  state = {
    toDoItemArray: [],
    add_item: ''
  }

    clearList = (event) => {
      this.setState({
        toDoItemArray: []
      })
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
    })
    }

    handleClick = (event) => {
      event.preventDefault()
      let myArray = [...this.state.toDoItemArray]
      myArray.push(this.state.add_item)
      this.setState({
        toDoItemArray: myArray
      })
    }

  render () {
    let toDoList = this.state.toDoItemArray.map(ele => (
      <ListItem todoList={ele}/>
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <form onSubmit={this.handleClick}>
          <input type="text" name='add_item' onChange={this.handleChange}/><br />
          <input type="submit" value="Add Item"/>
        </form>
          <ul>
            <li>{toDoList}</li>
          </ul>
          <button onClick={this.clearList}>clear</button>
      </div>
      )
    }
  }


export default App;
