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
		   	<input type="text" readOnly value={this.props.punteggio} style={{display: this.props.punteggio!='' ? 'block' : 'none'  }} />
		   	<input 
		   	type="text" 
		   	readOnly 
		   	value={`Tentativi: ${this.props.tentativi}`} 
		   	/> 
		   	</>
		   }
		 </>
		);
	}

}
export default Punteggio;
