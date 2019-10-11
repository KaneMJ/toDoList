import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import AddItemBar from './AddItemBar';
import ListDisplay from './ListDisplay';

class App extends React.Component {
    state = { toDoList: [] };

    addToList = (item) => {
        console.log(`Hey there I am index: ${item}`);
        this.setState({ toDoList : [...this.state.toDoList, { text: item, status: 1 }] });
        console.log(this.state);
    }


    updateStatus = (status, index) => {
            if(status){
                let tempArray = [...this.state.toDoList];
                tempArray[index].status = 0;
                this.setState({ toDoList: tempArray });
            } else {
                let tempArray = [...this.state.toDoList];
                tempArray[index].status = 1;
                this.setState({ toDoList: tempArray });
           }
    }

    // An attempt to reset index and ids after deleting an index from our array
    // Possibly better way to do it.
    // resetIndex = () => {
    //     const length = this.state.toDoList.length;
    //     let tempArray = [...this.state.toDoList];
    //     let i = 0;
    //     tempArray.forEach( tempArray => tempArray.id() )

    // };

    removeFromList = (index) => {   
        let tempArray = [...this.state.toDoList];
        tempArray.splice(index, 1);
        this.setState({ toDoList: tempArray });
    }

    render () {
        return (
            <div className="ui container">
                <Navigation headTest="Presenting Stuff To-Do" />
                <AddItemBar updateList={this.addToList}/>
                <ListDisplay toDos={this.state.toDoList} removeFromList={this.removeFromList} updateStatus={this.updateStatus} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);
