import React from 'react';

class Section2 extends React.Component{
	constructor(props){
	   super(props);
	}
	
	render(){
		return(
		<>
			<br/>
			<br/>
			{ this.props.proceed === true && this.props.matrix.map((riga, indiceRiga) => (
			   <div key={indiceRiga}>
			   	{riga.map((cella,indiceCella)  => (
			   	  <span>
			   	  	<input type="button" 
			   	  	value={cella} 
			   	  	style={{  background: 'white',
  						color: this.props.disabilitati[indiceRiga][indiceCella] === true ? 'black' : 'white' }} 
			   	  	disabled = {this.props.disabilitati[indiceRiga][indiceCella] === true} onClick={this.props.handleClick} 
			   	  	name={`${indiceRiga} ${indiceCella}`} key={`${indiceRiga} ${indiceCella}`}/>
			   	  </span>
			   	))}
			   </div>
			)) }
			</>
		);
	}
}

export default Section2;
