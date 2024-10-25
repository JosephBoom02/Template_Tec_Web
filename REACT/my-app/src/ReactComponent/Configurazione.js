import React from 'react';

class Configurazione extends React.Component{
	constructor(props){
	   super(props);
	}


	render(){
	
	    return(
	    	<>
	    	   <h2> Configurazione </h2>
	    	   <label htmlFor="dimensione">Inserisci dimensione griglia (Minimo 5 massimo 10)  </label>
			   <input type="text" name="dimensione" value={this.props.dimensione} onChange = {this.props.handleChange} />
		<label htmlFor="passi">Inserisci passi (Minimo 3) </label>
		<input type="text" name="passi" value={this.props.passi} onChange = {this.props.handleChange} />
		<input type="button" name="invia" onClick={this.props.handleClick} value="Invia" />
	    	</>
	    );
	}
}


export default Configurazione;

