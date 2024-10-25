import React from 'react';

class Section3 extends React.Component{
	constructor(props){
	   super(props);	
	}
	
    render() {
        return (
        <>
            <br/>
			<br/>
			<h2> {this.props.sectionName} </h2>
            <div>
                Nome:
                <input 
                    type="text"
                    id="nomeDaAggiungere"
                />
                Numero:
                <input 
                    type="text"
                    id="numeroDaAggiungere"
                /> 
                <button 
                    onClick={this.props.aggiungi}
                >
                Aggiungi
                </button> 
            </div>
        </>
        );
    }

}
export default Section3;
