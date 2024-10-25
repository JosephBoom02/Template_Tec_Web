import React from 'react';
import '../App.css';
import Configurazione from './Configurazione';
import Mappa from './Mappa';
import Punteggio from './Punteggio';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	larghezza : 5,
	lunghezza : 5,
	griglia : [],
	tentativi : 0,
	punteggio : '',
	proceed : false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange (event){
  	this.setState({
  		tentativi : 0,
  		punteggio : '',
  		proceed : false,
  	});
  	var valore = event.target.value.trim();
	if(event.target.name === "larghezza"){
		if( valore != ""){
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
		if( valore != ""){
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
  				proceed : false,
	  		    	tentativi : 0 ,
	  		    	punteggio : '',
  			});
  		}
  		let lung = this.state.lunghezza;
  		let largh = this.state.larghezza;
  		lung = parseInt(lung);
  		largh = parseInt(largh);
  		if(isNaN(lung) || isNaN(largh)){
  			alert("Inserisci due numeri interi, minimo 5 e massimo 10");
  			this.setState({
  				larghezza : 5,
  				lunghezza : 5,
  			});
  			return ;
  		}
  		else if((lung < 5 || lung > 10) || (largh < 5 || largh > 10)){
  			alert("Inserisci due numeri interi, minimo 5 e massimo 10");
  			this.setState({
  				larghezza : 5,
  				lunghezza : 5,
  			});
  			return ;
  		}
  		else{
  		    let temp = [];
  		    let i = 0;
  		    let randi = Math.floor(Math.random() * largh);
  		    let randj = Math.floor(Math.random() * lung);
  		    while(i < largh){
  		    	let j = 0;
  		    	temp[i] = [];
  		    	while(j < lung){
  		    	  if((i === (largh -1)) && (j === lung-1)){
  		    	  	temp[i][j] = true;
  		    	  }
  		    	  else{
  		    	  	temp[i][j] = false;
  		    	  }
  		    	  j++;
  		    	}
  		    	i++;
  		    }
  		    this.setState({
  		    	griglia : temp,
  		    	proceed : true,
  		    	tentativi : 0 ,
  		    	punteggio : '',
  		    })
  		}
  	}
  	else{	
  		if(event.target.style.background === 'yellow' ){
  		   alert("Elemento già cliccato!");
  		}
  		else if(this.state.punteggio != ''){
  			alert("Partita terminata, inserire nuovi dati nel campo Configurazione per giocare ancora");
  		}
  		else{
	  		var nameCell = event.target.name;
	  		console.log(nameCell);
	  		var arrCell = nameCell.split(' ');
	  		var li = parseInt(arrCell[0].trim());
	  		var lj = parseInt(arrCell[1].trim());
	  		if(isNaN(li) || isNaN(lj)){
	  			alert("Errore imprevisto!");
	  			this.setState({
	  		    	griglia : [],
	  		    	proceed : false,
	  		    	tentativi : 0 ,
	  		    	punteggio : '',
	  		    });
	  		    return;
	  		}
	  		else{
	  		    let newCont = this.state.tentativi + 1;
	  		    this.setState({
	  		    	tentativi : newCont,
	  		    });
	  		    let temp = this.state.griglia;
	  		    if(temp [li][lj] === true){
	  		    	alert("Indovinato!");
	  		    	event.target.style.background='white';
	  		    	event.target.style.color="red";
	  		    	event.target.value = "T";
	  		    	console.log(event.target.value);
	  		    	let out='';
	  		    	if(this.state.conteggio <11){
	  		    	   out = '5 Punti!';
	  		    	}
	  		    	else{
	  		           out = '2 Punti!';
	  		    	}
	  		    	this.setState({
	  		    	   punteggio : out,
	  		    	});
	  		    }
	  		    else{
	  		    	event.target.style.background = 'yellow';
	  		    }
	  		}
  	    }
  	}
  }

  render() {
    return (
      <div className="App">
        <Configurazione larghezza={this.state.larghezza} lunghezza={this.state.lunghezza} handleChange={this.handleChange} handleClick={this.handleClick} />
        <Mappa matrix={this.state.griglia} proceed={this.state.proceed} handleClick={this.handleClick}/>
        <Punteggio proceed={this.state.proceed} tentativi={this.state.tentativi} punteggio={this.state.punteggio}/>
      </div>
    );
  }
}

export default App;
