import React from 'react';
import '../App.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

class App extends React.Component {
  constructor(props) {
    super(props);
	this.sectionNames = ["Configurazione", "Pista", "Classifica"];

    this.state = {
		corridori: 0,
		colors: [ "red", "green", "blue", "violet", "yellow", "orange"],
		griglia : [],
		isColored: [],
		posizioni: [],
		classifica: [],
		intervalId: null,
		started: false,
    };
    this.handleClick = this.handleClick.bind(this);
	this.reset = this.reset.bind(this);
  }
  
  printStatus(){
	console.log("Status:");
	console.log("Corridori: " + this.state.corridori);
	console.log("Colors: " + this.state.colors);
	console.log("Posizioni: " + this.state.posizioni);
	console.log("Griglia: " + this.state.griglia);
	console.log("isColored: " + this.state.isColored);
	console.log("Classifica: " + this.state.classifica);
	console.log("Started: " + this.state.started);

  }

  handleClick(){
	let corridoriTemp = parseInt(document.getElementById("corridori").value, 10);

	if(corridoriTemp < 4 || corridoriTemp > 6){
		alert("Inserisci un numero di corridori tra 4 e 6!")
		return
	}

	let grigliaTemp = [];
	let isColoredTemp = [];
	let posizioniTemp = [];

	for(let i=0;i<corridoriTemp;i++){
		//griglia
		grigliaTemp[i] = [];
		grigliaTemp[i][0] = "Partenza";
		grigliaTemp[i][10] = "Traguardo";
		for(let j=1;j<10;j++){
			grigliaTemp[i][j] = j;
		}

		//isColored
		isColoredTemp[i] = [];
		isColoredTemp[i][0] = true;
		for(let j=1;j<11;j++){
			isColoredTemp[i][j] = false;
		}
		

		posizioniTemp[i] = 0;
	}

	this.setState(
		({
			griglia: grigliaTemp,
			corridori: corridoriTemp,
			isColored: isColoredTemp,
			posizioni: posizioniTemp,
			started: true,
		}),
		this.printStatus
	);	
	this.startInterval();
  }

  startInterval = () => {
    // Check if an interval is already running
    if (this.state.intervalId) return;

    // Set up the interval
    const intervalId = setInterval(() => {
      this.avanza();
    }, 1000); // 4000 milliseconds = 4 seconds

    // Update the state with the interval ID
    this.setState({ intervalId });
  };

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    const { intervalId } = this.state.intervalId;
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  avanza(){
	if(this.state.started){
		let isColoredTemp = this.state.isColored;
		let startedTemp = true;
		let posizioniTemp = this.state.posizioni;
		let classificaTemp = this.state.classifica;

		for(let i=0;i<this.state.corridori;i++){
			let lastIndex = -1;
			for(let j=1;j<11;j++){
				if(isColoredTemp[i][j] === false){
					lastIndex = j-1;
					break;
				}
					
			}

			let n = Math.floor(Math.random() * 3) + 1;
			console.log("Corridore " + (i+1) + " avanza di " + n  + " posizioni");

			for(let j=lastIndex;j<=lastIndex+n;j++){
				isColoredTemp[i][j] = true;
			}
		}

		//aggiorno posizioni
		for(let i=0;i<this.state.corridori;i++){
			let lastIndex = -1;
			for(let j=1;j<11;j++){
				if(isColoredTemp[i][j] === false){
					lastIndex = j-1;
					console.log("Last index of isColored for corridor " + i + ": " + lastIndex);
					break;
				}
				else if(j === 10){
					lastIndex = 10;
				}
					
			}

			posizioniTemp[i] = lastIndex;
		}
		

		//controllo se qualcuno è arrivato al traguardo
		for(let i=0; i<posizioniTemp.length;i++){
			if(posizioniTemp[i] === 10){
				startedTemp = false;
			}
		}

		if(startedTemp === false){
			//classifica associa a ogni corridore identificato
			//dall'indice dell'array la sua posizione nella
			//classifica
			const athletes = posizioniTemp.map((distance, index) => ({
				athleteNumber: index,
				distance: distance,
			}));

			athletes.sort((a, b) => b.distance - a.distance);
			

			classificaTemp = new Array(posizioniTemp.length).fill(0);

			let currentRank = 1; // Start ranking from 1
			for (let i = 0; i < athletes.length; i++) {
				// If it's the first athlete or the distance is different from the previous athlete
				if (i === 0 || athletes[i].distance !== athletes[i - 1].distance) {
					classificaTemp[athletes[i].athleteNumber] = currentRank; // Assign current rank
					currentRank++; // Increment the rank for the next athlete
				} else {
					classificaTemp[athletes[i].athleteNumber] = classificaTemp[athletes[i - 1].athleteNumber]; // Assign the same rank as the previous athlete
				}
			}

			
		}


		this.setState(
			({
				isColored: isColoredTemp,
				posizioni: posizioniTemp,
				started: startedTemp,
				classifica: classificaTemp,
			}),
			this.printStatus,
			startedTemp === false ? setTimeout(() => { alert("Gioco finito"); }, 100 ) : null,
		)
	}
  }


  reset(){
	this.setState(
		({
			corridori: 0,
			griglia : [],
			isColored: [],
			posizioni: [],
			classifica: [],
			intervalId: null,
			started: false,
		}),
	)
  }

  render() {
    return (
      <div className="App">

		<Section1 
			sectionName = {this.sectionNames[0]}
			handleClick={this.handleClick} 
		/>
		<Section2 
			sectionName = {this.sectionNames[1]}
			matrix={this.state.griglia} 
			colors={this.state.colors}
			isColored={this.state.isColored}
		/>
		<Section3 
			sectionName = {this.sectionNames[2]}
			posizioni={this.state.posizioni}
			classifica={this.state.classifica}
		/>
		<Section4
			started={this.state.started}
			reset={this.reset}
		/>

      </div>
    );
  }
}

export default App;
