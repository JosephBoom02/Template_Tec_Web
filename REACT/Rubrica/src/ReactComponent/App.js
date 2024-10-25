import React from 'react';
import '../App.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

class App extends React.Component {
  constructor(props) {
    super(props);
	this.sectionNames = ["Ricerca", "Display", "Aggiunta nome"];

	let entriesTemp = [];
	entriesTemp[0] = { name: "Paolo", number: "3397845631"};
	entriesTemp[1] = { name: "Paola", number: "3387845632"};
	entriesTemp[2] = { name: "Francesco", number: "3334845121"};
	entriesTemp[3] = { name: "Giuseppe", number: "3735410506"};
	entriesTemp[4] = { name: "Giulia", number: "3496846632"};

    this.state = {
		entries: entriesTemp,
		entriesRes: [],
    };


    this.cerca = this.cerca.bind(this);
	this.cancella = this.cancella.bind(this);
	this.aggiungi = this.aggiungi.bind(this);
	this.printStatus();
  }
  
  printStatus(){
	console.log("Status:");
	console.log("Entries:");
	let entries = this.state.entries;
	entries.forEach(entry => {
		console.log("Nome: " + entry.name + " - Numero: " + entry.number);
	});

	console.log("EntriesRes:");
	let entriesRes = this.state.entriesRes;
	entriesRes.forEach(entry => {
		console.log("Nome: " + entry.name + " - Numero: " + entry.number);
	});
	

  }

  cerca(){
	let name = document.getElementById("nome").value;
	if(name !== ""){
		let entriesResTemp = [];
		let entries = this.state.entries;
		

		console.log("Nome da cercare: " + name);

		if(name !== undefined){
			entries.forEach(entry => {
				if(entry.name.toLowerCase().startsWith(name)){
					entriesResTemp.push(entry);
				}
			});

		}

		this.setState(
			({
				entriesRes: entriesResTemp
			}),
			this.printStatus
		)	
	}
  }

  cancella(event){
	let name = event.target.name;
	let entriesTemp = this.state.entries;

	console.log("Richiesta cancellazione di " + name);

	entriesTemp.forEach((entry, index) => {
		if(entry.name === name){
			entriesTemp.splice(index, 1);
		}
	});

	this.setState(
		({
			entries: entriesTemp
		}),
		this.printStatus(),
		this.cerca()
	)

  }

  aggiungi(){
	let name = document.getElementById("nomeDaAggiungere").value;
	let number = document.getElementById("numeroDaAggiungere").value;
	let check = true;

	console.log("Richiesta aggiunta di " + name + " - " + number);

	if(name && number){
		let entriesTemp = this.state.entries;

		entriesTemp.forEach((entry) => {
			if(entry.name === name){
				check = false;
			}
		});

		if(check){
			let entry = {name: name, number: number};
			entriesTemp.push(entry);
		}
		else{
			//sovrascrivi
			if (window.confirm('Contatto già esistente. Vuoi sovrascriverlo?')) {
				// Save it!
				entriesTemp.forEach((entry) => {
					if(entry.name === name){
						entry.number = number;
					}
				});
				console.log('Contatto sovrascritto');
			} else {
				// Do nothing!
				console.log('Contatto non sovrascritto');
			}
		}

		this.setState(
			({
				entries: entriesTemp
			}),
			this.printStatus(),
			this.cerca()
		)

	}
  }


  render() {
    return (
      <div className="App">

		<Section1 
			sectionName = {this.sectionNames[0]}
			cerca={this.cerca}
		/>
		<Section2 
			sectionName = {this.sectionNames[1]}
			entriesRes={this.state.entriesRes}
			cancella={this.cancella}
		/>
		<Section3
			sectionName = {this.sectionNames[2]}
			aggiungi={this.aggiungi}
		/>


      </div>
    );
  }
}

export default App;
