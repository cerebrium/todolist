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
        toDoItemArray = []
      })
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
    })
    }

    handleClick = (event) => {
      event.preventdefault()
      myArray = [...this.state.toDoItemArray]
      myArray.push(event.add_item.target)
      console.log(myArray)
    }

  render () {
    let toDoList = this.state.toDoItemArray.map(ele => (
      <ListItem todoList={ele}/>
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <form onClick={this.handleClick}>
          <input type="text" name='add_item' onChange={this.handleChange}/><br />
          <input type="submit" value="Add Item"/>
        </form>
          <ul>
            <li>{toDoList}</li>
          </ul>
      </div>
      )
    }
  }


export default App;
