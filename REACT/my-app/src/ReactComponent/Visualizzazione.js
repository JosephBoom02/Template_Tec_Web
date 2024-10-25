import React from 'react';

class Visualizzazione extends React.Component {
  constructor(props) {
		super(props);
	}
	
	  calculate(numeriUtente,numeriEstratti){
	  	let indici = [];
	  	let i=0;
	  	while(i < numeriUtente.length){
	  	   let j=0;
	  	   while(j < numeriEstratti.length){
	  	   	if(numeriUtente[i] === numeriEstratti[j])
	  	   	   indici.push(i);
	  	   	j++;
	  	   }	
	  	   i++;
	  	}
	  	console.log(indici);
	  	return indici;
	  }
	
	render() {	
		console.log(this.props);
		let indici = [];
		let caso ="white";
		let def ="white";
		let count= 0;
		if(this.props.show === true){
			let numeriUtente = this.props.numbers;
			let numeriEstratti = this.props.drawnNumbers;
			indici = this.calculate(numeriUtente,numeriEstratti);
			count = indici.length;
		}
		switch(count){
			case 2:
				caso = "yellow";
				break;
			case 3:
				caso = "green";
				break;
			case 4:
				caso = "blue";
				break;
			case 5:
				caso = "red";
				break;
			default:
				caso = "white";
				break;
		}
		console.log(caso);
		return (
	      <>
		<h2>Visualizzazione</h2>
		<input type="text" value={this.props.result} readOnly style={{ display: this.props.show === true ? 'block' : 'none' }} />
		<div className="section">
		{this.props.ready === true && 
		  this.props.numbers.map((item,index) => <input name={index} type="text" readOnly key={index} value={item} style={{backgroundColor:  indici.includes(index) ? caso : def }} />)}
		</div>
	      </>
	    );
    }
}

export default Visualizzazione;
