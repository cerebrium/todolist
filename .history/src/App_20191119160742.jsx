import React from 'react';
import './App.css';
import './ListItem';
import ListItem from './ListItem';

class App extends React.Component {

  clearList(e) {

    state = {
      toDoItemArray: this.props.theList
    }

    clearList = (e) => {
      this.setState({
        toDoItemArray: []
      })
    }
  }

  render () {
    let toDoList = this.props.theList.map(ele => (
      <ListItem todoList={ele}/>
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <li>{toDoList}</li>
        </ul>
      </div>
      )
    }
  }


export default App;
