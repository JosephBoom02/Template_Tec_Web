import React from 'react';

class Section1 extends React.Component{
	constructor(props){
	   super(props);
	}


	render(){
	
	    return(
	    	<>
	    	   <h2> {this.props.sectionName} </h2>
	    	   <label htmlFor="larghezza">Inserisci Larghezza (Minimo 8) </label><input type="text" name="larghezza" value=
					{this.props.larghezza} onChange = {this.props.handleChange} />
				<label htmlFor="lunghezza">  Inserisci Lunghezza (Minimo 8) </label><input type="text" name="lunghezza" value=
					{this.props.lunghezza} onChange = {this.props.handleChange} />
				<input type="button" name="invia" onClick={this.props.handleClick} value="Invia" />
	    	</>
	    );
	}
}


export default Section1;

