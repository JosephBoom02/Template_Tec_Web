import React from 'react';

class Griglia extends React.Component{
	constructor(props){
	   super(props);
	}
	
	render(){
		return(
		<>
			{ this.props.proceed === true && this.props.matrix.map((riga, indiceRiga) => (
			   <div key={indiceRiga}>
			   	{riga.map((cella,indiceCella)  => (
			   	  <span>
			   	  	<input type="button" readOnly value="" 
                    style={{  background: 'grey' }} 
                    onClick={this.props.handleClick} 
                    name={`${indiceRiga} ${indiceCella}`}
                    disabled={ this.props.disabilitati[indiceRiga][indiceCella] === true}
                    />
			   	  </span>
			   	))}
			   </div>
			)) }
			</>
		);
	}
}

export default Griglia;