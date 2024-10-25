import React from 'react';

class Lavagna extends React.Component {
    render() {
        return (
            <div>
            <p>{this.props.dati}</p>
            <button name="cancella" onClick={this.props.onClick}>Cancella tutto</button>
            </div>
        )};
}

export default Lavagna;
