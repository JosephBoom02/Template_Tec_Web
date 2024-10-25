function invia(nMatrici){
	var matrici = []
	for (let m = 0; m < nMatrici; m++){
		let matrice = {}
		for(let row = 0; row < 3; row++){
			for (let col =0; col < 3; col++){
				let cell = document.getElementById("cell-"+m+"-"+row+"-"+col);
				if (cell.value == ""){
					alert("Riempire tutte le celle");
				}
				matrice[""+row + "-" + col]= parseFloat(cell.value);
			}
		}
		matrici.push(matrice);
	}
	console.log(matrici);
	var results = [];
	
	matrici.map((matrice, idx) => {
		let timeInit = performance.now();
		const queryString = new URLSearchParams(matrice).toString();
		fetch(`Determinante?${queryString}`, {
  			method: 'GET'})
  		.then(response => {
    		return response.text();
  		})
  		.then(data => {
			results.push({
				time: performance.now()-timeInit,
				index: idx,
				det: data
			});
			console.log("Tempo: " + (performance.now()-timeInit) + "\nidx: " + idx + "\ndet: " + data)
		})
  		.catch(error => {
			console.log("Error");
  		});
  	})
  	console.log(results);
} 