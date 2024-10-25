import React from 'react';
class Display extends React.Component {

    render() {
    let result1 = this.props.result1;
    let result2 = this.props.result2;
    return (
        <div className="result">
        <p><span>{result1}</span><span>{result2}</span></p>
        </div>
        );
    }
}

export default Display;

import React from 'react';

class Compilazione extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			numbers : ["","","","",""],
			selected : false,
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		console.log(e);
		console.log(e.target);
		console.log(e.target.value);
		console.log(e.target.name);
	}
	
	render() {
		let numbers = this.props.numbers;
		let selected = this.props.selected;
		return (
	      <>
		<h2>Compilazione</h2>
		<button onClick={ () => this.setState ({ selected : true }) }>Nuova Schedina</button>
		<div className="section">
		  {numbers.map((item,index) => <input type="text" min="1" max="10" style={{display: selected === true ? 'block' : 'none' }} id={index} name={index} onKeyUp = {this.handleChange} key={index}/>)}
		</div>
		<button onClick={ () => this.setState ({ selected : false }) }>Finalizza</button>
	      </>
	    );
    }

}
