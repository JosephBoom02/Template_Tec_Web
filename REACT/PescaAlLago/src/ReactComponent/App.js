import React from 'react';
import '../App.css';
import Configurazione from './Section1';
import Pesca from './Section2';
import Punteggio from './Section3';

class App extends React.Component {
  constructor(props) {
    super(props);
	this.sectionNames = ["Gioco", "Punteggio"];

    this.state = {
		larghezza : 8,
		lunghezza : 8,
		griglia : [],
		disabled : [],
		tentativi : 0,
		punteggio : 0,
		proceed : false,
		mediaPunt : 0,
		show : false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange (event){
  	this.setState({
  		griglia : [],
		disabled : [],
		tentativi : 0,
		punteggio : 0,
		proceed : false,
		mediaPunt : 0,
		show : false,
  	});
  	var valore = event.target.value.trim();
	if(event.target.name === "larghezza"){
		if( valore !== ""){
	            valore = parseInt(valore);
	            if(isNaN(valore)){
		   	alert("Devi inserire un numero intero");
		   	return;
		    }
		}
		this.setState({
			larghezza : valore,
		});
	}
	else if(event.target.name === "lunghezza" ){
		if( valore !== ""){
	            valore = parseInt(valore);
			if(isNaN(valore)){
			   alert("Devi inserire un numero intero");
			   return;
			}
		}
		this.setState ({
			lunghezza : valore,
		});
	}
  }

  handleClick (event){
  	if(event.target.name === "invia" ){
  		if(this.state.proceed === true){
  			this.setState({
  				griglia : [],
				disabled : [],
				tentativi : 0,
				punteggio : 0,
				proceed : false,
				mediaPunt : 0,
				show : false,
  			});
  		}
  		let lung = this.state.lunghezza;
  		let largh = this.state.larghezza;
  		lung = parseInt(lung);
  		largh = parseInt(largh);
  		if(isNaN(lung) || isNaN(largh)){
  			alert("Inserisci due numeri interi, minimo 8 e massimo 16");
  			this.setState({
  				larghezza : 8,
  				lunghezza : 8,
  			});
  			return ;
  		}
  		else if((lung < 8 || lung > 16) || (largh < 8 || largh > 16)){
  			alert("Inserisci due numeri interi, minimo 8 e massimo 16");
  			this.setState({
  				larghezza : 8,
  				lunghezza : 8,
  			});
  			return ;
  		}
  		else{
  		    let temp = [];
  		    let tempDis = [];
  		    let i = 0;
  		    while(i < lung){
  		    	let j = 0;
  		    	temp[i] = [];
  		    	tempDis[i] = [];
  		    	while(j < largh){
  		    	  let numPesci = Math.floor(Math.random() * 9);
  		    	  numPesci -= 3;
  		    	  if(numPesci < 0){
  		    	  	numPesci = 0;
  		    	  }
  		    	  temp[i][j] = numPesci;
  		    	  tempDis[i][j] = false;
  		    	  j++;
  		    	}
  		    	i++;
  		    }
  		    this.setState({
  		    	griglia : temp,
  		    	disabled : tempDis,
  		    	proceed : true,
  		    	tentativi : 0 ,
  		    	punteggio : 0,
  		    })
  		}
  	}
  	else{
  	    if(this.isFinito() === true){
  		 alert("Gioco finito immetti nuovi dati per giocare ancora!");
  	    }
  	    else{   
  	    	    console.log("Non è finito");	
	  	    let nameCella = event.target.name;
	  	    let indici = nameCella.trim().split(' ');
	  	    let i = parseInt(indici[0].trim()); 
	  	    let j = parseInt(indici[1].trim());
	  	    console.log(i +" "+ j);
	  	    this.modificaCella(i,j);
	  	    if(this.isFinito() === true){
	  	    	alert("Pesca terminata!");
	  	    }
  	    }
  	}
  }

  modificaCella(i,j){
	    if(this.state.disabled[i][j] === false){
	    	this.setState({
	    		tentativi : this.state.tentativi +1,
	    	});
	    	let punteggioTemp = this.state.punteggio;
	    	let temp = this.state.disabled;
	    	temp[i][j] = true;
	    	punteggioTemp += this.state.griglia[i][j];
	    	if(i-1 >=0 && temp[i-1][j] === false){
	    		temp[i-1][j] = true;
	    		punteggioTemp += this.state.griglia[i-1][j];
	    	}
	    	if(i+1 <this.state.lunghezza && temp[i+1][j] === false){
	    		temp[i+1][j] = true;
	    		punteggioTemp += this.state.griglia[i+1][j];
	    	} 
	    	if(j-1 >=0 && temp[i][j-1] === false){
	    		temp[i][j-1] = true;
	    		punteggioTemp += this.state.griglia[i][j-1];
	    	}
	    	if(j+1 >=0 && temp[i][j+1] === false){
	    		temp[i][j+1] = true;
	    		punteggioTemp += this.state.griglia[i][j+1];
	    	}
	    	this.setState({
	    		punteggio : punteggioTemp,
	    		disabled : temp,
	    	});
	    }
  }

  isFinito(){
    let finish = true;
    for(let i = 0 ; i<this.state.lunghezza && finish === true;i++){
    	for(let j = 0 ;j<this.state.larghezza;j++){
    		if(this.state.disabled[i][j] === false){
    			finish = false;
    			break;
    		}
    	}
    }
    if(finish === true){
    	if(this.state.show === false){
	    	this.setState({
	    		mediaPunt : this.state.punteggio / this.state.tentativi,
	    		show : true,
	    	});
    	}
    	return true;
    }
    else{
    	return false;
    }
  }

  render() {
    return (
      <div className="App">

		<Configurazione 
			sectionName = {this.sectionNames[0]}
			larghezza={this.state.larghezza} 
			lunghezza={this.state.lunghezza} 
			handleChange={this.handleChange} 
			handleClick={this.handleClick} />
		<Pesca 
			sectionName = {this.sectionNames[1]}
			matrix={this.state.griglia} 
			proceed={this.state.proceed} 
			handleClick={this.handleClick} 
			disabilitati={this.state.disabled}/>
		<Punteggio 
			sectionName = {this.sectionNames[2]}
			proceed={this.state.proceed} 
			media={this.state.mediaPunt} 
			punteggio={this.state.punteggio} 
			show={this.state.show}/>

      </div>
    );
  }
}

export default App;
