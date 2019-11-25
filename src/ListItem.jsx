import React from 'react';

class ListItem extends React.Component {
    render () {
        return(
        <p>
            <div>{this.props.todoList}</div>
        </p>
        )
    }
}

export default ListItem;