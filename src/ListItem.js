import React from 'react';

class ListItem extends React.Component {
    update = () => {
        this.props.updateStatus(this.props.status, this.props.index);
    }

    remove = () => {
        this.props.removeFromList(this.props.index);
    }

    render(){
        var color;
        if(this.props.status){
            color = {backgroundColor: "white"}
        } else {
            color = {backgroundColor: "green"};
        }

        return (
            <div 
                className="ui segment"
                style={color}
            >
                <div>
                    {this.props.toDo}
                    <span style={{float: 'right'}}>
                        <div onClick={this.update} className="check-wrapper" style={{display: 'inline-block', marginRight: '20px'}}>
                            <i className ="check icon right floated"></i>
                        </div>
                        <div onClick={this.remove} className="trash-wrapper" style={{display: 'inline-block'}}>
                            <i className ="trash icon right floated"></i>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default ListItem;