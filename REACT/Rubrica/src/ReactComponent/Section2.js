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
			{this.props.entriesRes.length > 0 && (
                <h2>{this.props.sectionName}</h2>
            )}
			
			{ 	this.props.entriesRes.length > 0 &&
				this.props.entriesRes.map((entry) => (
					<div key={entry.name}>
						Nome:
						<input 
							type="text" 
							readOnly 
							value={`${entry.name}`} 
                        />
						Numero:
						<input 
							type="text" 
							readOnly 
							value={`${entry.number}`} 
                        /> 
						<button 
							onClick={this.props.cancella}
							name={`${entry.name}`} 
						>
                    		Cancella
                    	</button> 
					</div>
				))
			}
			</>
		);

	}
}

export default Section2;
