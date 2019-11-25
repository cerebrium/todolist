import React from 'react';
import './App.css';
import './ListItem';
import ListItem from './ListItem';

class App extends React.Component {

    clearList = (e) => {
      this.setState({
        toDoItemArray: []
      })
    }

    handleClick = (event) => {
      event.preventdefault()
      
    }

  render () {
    let toDoList = this.props.theList.map(ele => (
      <ListItem todoList={ele}/>
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <form onClick={this.handleClick}>
          <input type="text" name='add_item'/><br />
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
