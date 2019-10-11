import React from 'react';

const Navigation = (props) => {
    return (    
            <div className="ui segment">
                <div className="label" style={{textAlign: 'center'}}>
                    <h1>{props.headTest}</h1>
                </div>
            </div>
    )
}

export default Navigation;