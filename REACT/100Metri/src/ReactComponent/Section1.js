import React from 'react';

class Section1 extends React.Component{
	constructor(props){
	   super(props);
	}


	render(){
	
	    return(
	    	<>
				<h2> {this.props.sectionName} </h2>
				Numero di corridori: <input type="number" min="4" max="6" id="corridori"/>
				<br></br>
				<br></br>
				<button onClick={this.props.handleClick}>Invia</button>
	    	</>
	    );
	}
}


export default Section1;

