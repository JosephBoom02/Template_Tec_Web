import React from 'react';

class Mappa extends React.Component{
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
			   	  	<input type="text" readOnly value="" style={{ background: 'grey' }} onClick={this.props.handleClick} name={`${indiceRiga} ${indiceCella}`}/>
			   	  </span>
			   	))}
			   </div>
			)) }
			</>
		);
	}
}

export default Mappa;
