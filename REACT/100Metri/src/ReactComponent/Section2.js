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
			{ 	this.props.matrix.map((riga, indiceRiga) => (
					<div key={indiceRiga}>
						{riga.map((cella,indiceCella)  => (
						<span>
							<input type="button" 
							value={cella} 
							style={{  
								background: this.props.isColored[indiceRiga][indiceCella] === true ? this.props.colors[indiceRiga] : 'white',
								color: 'black'
							}} 
							disabled = 'true'
							name={`${indiceRiga} ${indiceCella}`} key={`${indiceRiga} ${indiceCella}`}/>
						</span>
						))}
					</div>
				))
			}
			</>
		);

	}
}

export default Section2;
