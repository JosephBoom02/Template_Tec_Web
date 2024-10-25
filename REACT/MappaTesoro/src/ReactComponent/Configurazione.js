import React from 'react';

class Configurazione extends React.Component{
	constructor(props){
	   super(props);
	}


	render(){
	
	    return(
	    	<>
	    	   <h2> Configurazione </h2>
	    	   <label for="larghezza">Inserisci Larghezza (Minimo 5) </label><input type="text" name="larghezza" value=
{this.props.larghezza} onChange = {this.props.handleChange} />
		<label for="lunghezza">Inserisci Lunghezza (Minimo 5) </label><input type="text" name="lunghezza" value=
{this.props.lunghezza} onChange = {this.props.handleChange} />
		<input type="button" name="invia" onClick={this.props.handleClick} value="Invia" />
	    	</>
	    );
	}
}


export default Configurazione;

