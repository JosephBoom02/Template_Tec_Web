import React from 'react';

class Section1 extends React.Component{
	constructor(props){
	   super(props);
	}


	render(){
	
	    return(
	    	<>
				<h2> {this.props.sectionName} </h2>
				Nome del contatto da cercare: <input type="text" id="nome"/>
				<br></br>
				<br></br>
				<button onClick={this.props.cerca}>Cerca</button>
	    	</>
	    );
	}
}


export default Section1;

