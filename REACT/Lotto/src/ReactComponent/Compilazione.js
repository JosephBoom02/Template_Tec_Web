import React from 'react';

class Compilazione extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {	
		console.log(this.props);
		return (
	      <>
		<h2>Compilazione</h2>
		<button name="genera" onClick={this.props.onClick}>Nuova Schedina</button>
		<div className="section">
		  {this.props.numbers.map((item,index) => <input name={index} type="text" style={{display: this.props.selected === true ? 'block' : 'none' }} onKeyUp = {this.props.handleChange} onChange = {this.props.handleChange} key={index} value={item}/>)}
		</div>
		<button name="finalizza" onClick={this.props.onClick}>Finalizza</button>
	      </>
	    );
    }

}

export default Compilazione;
