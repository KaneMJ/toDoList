import React from 'react';

class AddItemBar extends React.Component {
    state = {text: ""};

    onType = (event) => {
        this.setState({text: event.target.value});
    }

    submitItem = (event) => {
        event.preventDefault();
        this.props.updateList(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div className ="ui segment">
                <form onSubmit={this.submitItem} className="ui fluid form">
                    <div className="form">
                        <input type="text" 
                            value={this.state.text}
                            onChange={this.onType} 
                            >  
                            </input>
                        <label className="ui pointing label"
                                
                        >Add To Do Item and Click Save</label>
                        <button 
                            className="ui primary button right floated"
                            style={{marginTop: '8px'}}>
                                Add to List
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItemBar;