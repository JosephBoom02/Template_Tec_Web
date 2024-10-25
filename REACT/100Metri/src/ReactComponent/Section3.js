import React from 'react';

class Section3 extends React.Component{
	constructor(props){
	   super(props);	
	}
	
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>Posizioni:</h3>
                    {this.props.posizioni.map((posizione, corridore) => (
                        <div key={corridore}>
                            Corridore {corridore + 1}:   
                            <input 
                                type="text" 
                                readOnly 
                                value={`${posizione}`} 
                            /> 
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginLeft: '20px' }}>
                    <h3>Classifica:</h3>
                    {/* Assuming you have a prop called 'classifica' that is an array */}
                    {this.props.classifica.map((corridore, index) => (
                        <div key={index}>
                            Corridore {index + 1}:   
                            <input 
                                type="text" 
                                readOnly 
                                value={`${corridore}`} 
                            /> 
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}
export default Section3;
