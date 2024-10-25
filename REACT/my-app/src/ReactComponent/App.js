import React from 'react';
import '../App.css';
import Configurazione from './Configurazione';
import Griglia from './Griglia';
import Punteggio from './Punteggio';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	dim : '',
	passi : '',
	griglia : [],
	disabilitati : [],
	tentativi : 0,
	punteggio : 0,
	proceed : false,
	esito : ' ',
	show : false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
 disabledAll(){
	let temp = this.state.disabilitati;
	for(let i = 0;i<this.state.dim;i++){
		for(let j = 0;j<this.state.dim;j++){
			temp[i][j] = true;
		}
	}
 }

  handleChange (event){
  	this.setState({
  		griglia : [],
		disabilitati : [],
		tentativi : 0,
		punteggio : 0,
		proceed : false,
		esito : ' ',
		show : false,
  	});
  	var valore = event.target.value.trim();
	console.log(valore);
	if(event.target.name === "dimensione"){
		if( valore !== ""){
			valore = parseInt(valore);
			console.log(valore);
			if(isNaN(valore)){
				alert("Devi inserire un numero intero");
				return;
		    }
		}
		this.setState({
			dim : valore,
		});
		
	}
	else if(event.target.name === "passi" ){
		if( valore !== ""){
	            valore = parseInt(valore);
			if(isNaN(valore)){
			   alert("Devi inserire un numero intero");
			   return;
			}
		}
		this.setState ({
			passi : valore,
		});
	}
  }

  handleClick (event){
  	if(event.target.name === "invia" ){
  		if(this.state.proceed === true){
  			this.setState({
  				griglia : [],
				disabilitati : [],
				tentativi : 0,
				punteggio : 0,
				proceed : false,
				esito : ' ',
				show : false,
  			});
  		}
  		let dimT = this.state.dim;
  		let passiT = this.state.passi;
  		dimT = parseInt(dimT);
  		passiT = parseInt(passiT);
  		if(isNaN(dimT) || isNaN(passiT)){
  			alert("Inserisci due numeri interi,");
  			this.setState({
  				dim : '',
  				passi : '',
  			});
  			return ;
  		}
  		else if((dimT < 5 || dimT > 10) || (passiT < 3 || passiT > ((dimT*dimT)/2))){
  			alert("Inserisci due numeri interi secondo le specifiche, numero passi <= dimensione*2 ÷ 2");
  			this.setState({
  				larghezza : '',
  				lunghezza : '',
  			});
  			return ;
  		}
  		else{
  		    let temp = [];
  		    let tempDis = [];
  		    let i = 0;
  		    while(i < dimT){
  		    	let j = 0;
  		    	temp[i] = [];
  		    	tempDis[i] = [];
				let posBomba1 = Math.floor(Math.random() * dimT);
				let posBomba2 = Math.floor(Math.random() * dimT);
				while(posBomba2 === posBomba1){
				posBomba2 = Math.floor(Math.random() * dimT);
				}
  		    	while(j < dimT){
  		    	  temp[i][j] = false;
  		    	  tempDis[i][j] = false;
  		    	  j++;
  		    	}
				temp[i][posBomba1] = true;
				temp[i][posBomba2] = true;
  		    	i++;
  		    }
  		    this.setState({
  		    	griglia : temp,
  		    	disabilitati : tempDis,
  		    	proceed : true,
  		    	tentativi : 0,
  		    	punteggio : 0,
  		    });
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
	  	    this.modificaCella(i,j,event);
	  	    if(this.isFinito() === true){
	  	    	alert("Gioco terminato!");
				this.setState({
					show : true,
				});
				if(this.state.tentativi === this.state.passi){
					this.setState({
						esito : "Complimenti hai vinto",
					});
				}
	  	    }
  	    }
  	}
  }

  modificaCella(i,j,event){
	    if(this.state.disabilitati[i][j] === false){
	    	this.setState({
	    		tentativi : this.state.tentativi +1,
	    	});
			if(this.state.griglia[i][j] === true){
				this.setState({
					esito : "Mina calpestata hai perso",
					tentativi : this.tentativi + 1,
				});
				event.target.style.background = 'red';
				this.disabledAll();
			}
			else{
				let disTemp = this.state.disabilitati;
				disTemp[i][j] = true;
				this.setState({
					disabilitati : disTemp,
					punteggio : this.state.punteggio + 5,
					tentativi : this.state.tentativi + 1,
				});
				event.target.style.background = "blue";
			}
	    }
  }

  isFinito(){
    if(this.state.tentativi === this.state.passi)
		return true;
	else{
		let out = true;
		for(let i = 0;i<this.state.dim;i++){
			for(let j = 0;j<this.state.dim;j++){
				if(this.state.disabilitati[i][j] === false){
					out=false;
					break;
				}
				if(out === false)
					break;
			}
		}
	}
  }

  render() {
    return (
      <div className="App">
        <Configurazione dimensione={this.state.dim} passi={this.state.passi} handleChange={this.handleChange} handleClick={this.handleClick} />
        <Griglia matrix={this.state.griglia} proceed={this.state.proceed} handleClick={this.handleClick} disabilitati={this.state.disabilitati}/>
        <Punteggio proceed={this.state.proceed} esito={this.state.esito} punteggio={this.state.punteggio} show={this.state.show}/>
      </div>
    );
  }
}

export default App;
