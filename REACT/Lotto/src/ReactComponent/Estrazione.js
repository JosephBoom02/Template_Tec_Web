import React from 'react';

class Estrazione extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <h2>Estrazione</h2>
        <button name="estrai" onClick={this.props.onClick} >Estrai Numeri</button>
       { this.props.show === true && this.props.drawnNumbers.map((number, index) => (
          <input key={index} type="text" readOnly value={number} />
        ))}
      </>
    );
  }
}

export default Estrazione;
