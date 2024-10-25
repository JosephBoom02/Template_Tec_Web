import React from 'react';
import '../App.css';
import Compilazione from './Compilazione';
import Visualizzazione from './Visualizzazione';
import Estrazione from './Estrazione';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ['', '', '', '', ''],
      drawnNumbers: [],
      result: '',
      selected : false,
      ready : false,
      show : false,
    };

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

	
  modificaIndiceArray(indice,valore){
  	console.log(indice,valore);
  	var tempArray = [...this.state.numbers];
  	tempArray[indice] = valore;
  	this.setState({
  	    numbers : tempArray,
  	});
	return;
  }

  handleChange(event){
  	var indice = parseInt(event.target.name.trim());
  	if(isNaN(indice) || indice<0 || indice>4){
  	   console.log("errore indice:"+indice);
  	}
  	else{
            let okay = true;
  	    var valore = event.target.value.trim();
  	    if(valore === ""){
  	    	this.modificaIndiceArray(indice,'');
  	    	okay = false;
  	    	return;
  	    }
  	    valore = parseInt(valore);
  	    if(isNaN(valore)){
  	    	alert("Devi inserire un numero intero!");
  	    	this.modificaIndiceArray(indice,'');
  	    	okay = false;
  	    	return;
  	    }
  	    else{
  	    	if(valore < 1 || valore > 10){
	  	    	 alert("deve essere compreso fra 1 e 10");
	  	    	 this.modificaIndiceArray(indice,'');
	  	    	 okay = false;
	  	    	 return;
  	    	}
  	    	else{
  	    	   this.state.numbers.map((item,index) => { 
  	    	   	if(index != indice && item === valore){
  	    	   		alert("I 5 numeri devono essere distinti!");
  	    	   		this.modificaIndiceArray(indice,'')
  	    	   		okay = false;
  	    	   		return;
  	    	   	}
  	    	   } )
  	    	   if (okay === true){
	  	    	   this.modificaIndiceArray(indice,valore);
	  	    	   return;
  	    	   }
  	    	} 
  	    }
  	}
  };

  onClick(event){
  	console.log("entrato");
  	console.log(event.target);
  	console.log(event.target.name);
  	if(event.target.name === 'genera'){
  		this.setState ({
  		    numbers: ['', '', '', '', ''],
  		    drawnNumbers: [],
  		    selected : true,
  		    ready : false,
  		    show : false,
  		});
  	}
  	else if(event.target.name === 'finalizza' ){
  		this.state.numbers.map((item) => {
  			if(item === ""){
  			   alert("Inserisci tutti i numeri prima di inviare");
  			   return;
  			}
  		})
  		if(this.state.selected === false || this.state.ready === true || this.state.show === true ){
  			this.setState ({
	  		    numbers: ['', '', '', '', ''],
	  		    drawnNumbers: [],
	  		    selected : true,
	  		    ready : false,
	  		    show : false,
	  		});
  		}
  		else{
	  		this.setState ({
	  		   selected : false,
	  		   ready : true,
	  		});
	  	}
  	}
  	else if(event.target.name === 'estrai' ){
  		if(this.state.show === true || this.state.ready === false || this.state.selected === true ){
  		   alert("Inizia nuova partita per estrarre di nuovo!");
  		}
  		else{
  		    let estratti = [] ;
  		    while(estratti.length < 5){
  		    	let randomNum = Math.floor(Math.random() * 10) + 1;
  		    	if (!estratti.includes(randomNum)) {
			    estratti.push(randomNum);
		        }
  		    }
  		    let count = 0;
  		    this.state.numbers.map((item) => {
  		    	let i=0;
  		    	while(i < estratti.length){
  		    		if(item === estratti[i]){
  		    			count++;
  		    			break;
  		    		}
  		    		i++;
  		    	}
  		    });
  		    let out="";
  		    switch(count){
  		    	case 0:
  		    		out="Hai perso ritenta!";
  		    		break;
  		    	case 1:
  		    		out="Hai perso ritenta!";
  		    		break;
  		    	case 2:
  		    		out="Ambo : Hai vinto!";
  		    		break;
  		    	case 3:
  		    		out="Terna : Hai vinto!";
  		    		break;
  		    	case 4: 
  		    		out="Quaterna : Hai vinto!";
  		    		break;
  		    	case 5:
  		    		out="Cinquina : Hai vinto!";
  		    		break;
  		    }
  		    this.setState({
  		    	show : true,
  		    	drawnNumbers : estratti,
  		    	result : out,
  		    });
  		}
  	}
  }


  render() {
    return (
      <div className="App">
        <Compilazione onClick={this.onClick} numbers={this.state.numbers} selected={this.state.selected} handleChange={this.handleChange}/>
        <Visualizzazione numbers={this.state.numbers} drawnNumbers={this.state.drawnNumbers} result={this.state.result} show={this.state.show} ready={this.state.ready} />
        <Estrazione drawnNumbers={this.state.drawnNumbers} onClick={this.onClick} show={this.state.show}/>
      </div>
    );
  }
}

export default App;
