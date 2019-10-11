import React from 'react';
import ListItem from './ListItem';

const ListDisplay = (props) => {
    const renderedList = props.toDos.map((toDo, index) => {
        return <ListItem 
            toDo={toDo.text} 
            key={index} 
            status={toDo.status}
            updateStatus={props.updateStatus} 
            removeFromList={props.removeFromList}
            index={index} 
            />
    });

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Here is your list of chores</h3>
            <div className="ui container">{renderedList}</div>
        </div>
    )
}

export default ListDisplay;