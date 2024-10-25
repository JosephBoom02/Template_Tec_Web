import React from 'react';

class Punteggio extends React.Component{
	constructor(props){
	   super(props);	
	}
	
	render(){
		return(
		<>
		   { this.props.proceed === true &&  
		   	<>
		   	<br/>
		   	<div style={{ textAlign: 'center' }}>
		   	<input type="text" readOnly value={`Punteggio: ${this.props.punteggio}`} style={{display: this.props.proceed === true ? 'block' : 'none'  }} />
		   	<input 
		   	type="text" 
		   	readOnly 
		   	value={`Esito: ${this.props.esito}`} 
		   	style={{display: this.props.show === true ? 'block' : 'none'  }}
		   	/> 
		   	</div>
		   	</>
		   }
		 </>
		);
	}

}
export default Punteggio;
