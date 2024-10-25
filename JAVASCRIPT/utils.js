//Function that checks if a char is uppercase
function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

//-------Function that terminate the session after 60 minutes (time in millisecond)-------
function sessionCounter()
{
	sessionStartTime = new Date().getTime();
	lastCall = sessionStartTime;
	setTimeout(closeSession(), 1000*60*60);
}

//function to invoke in html input field: 
//<input type=“text” id=“op1” size=“3” onkeyup=“checkNumber(‘op1’);”>
//checks that the input string is a number, and if not,
//deletes the contents of the input element
function checkNumber(element)
{
	var elemento = document.getElementById(element);
	
	if(isNaN(elemento.value))
	{
		alert("il contenuto inserito in "+element+" non è un numero");
		elemento.value="";
		return;
	}
	
	// empty check
	if (elemento.value.length == 0){
		console.log("[checkNumber] element string is empty, returning");
		return;
	}
}

//Functions that clears all the input fields
function clearAllInputFields() {
    // Select all input fields except buttons
    const inputFields = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], input[type="number"], input[type="search"], input[type="tel"], input[type="url"], textarea');

    // Iterate through each input field and set its value to an empty string
    inputFields.forEach(input => {
        input.value = '';
    });
}

//setTimeout
setTimeout(() => { alert("Gioco finito"); }, 1000 )

//Delete an element from an array
array.splice(index, 1);

