
function printResult( stringa ) {
	myGetElementById("result").innerText = response;
}

/*
 * Funzione di callback
 */
function callback( theXhr ) {

	
	if ( theXhr.readyState === 2 ) {
	    	//theElement.innerHTML = "Richiesta inviata...";
	}// if 2
	else if ( theXhr.readyState === 3 ) {
    	//	theElement.innerHTML = "Ricezione della risposta...";
	}// if 3
	else if ( theXhr.readyState === 4 ) {
		// verifica della risposta da parte del server
		if ( theXhr.status === 200 ) {
			// operazione avvenuta con successo
			printResult(theXhr.responseText);
			
			//location.reload();
		}// if 200

		 else {
	        	// errore di caricamento
			 alert("Impossibile effettuare l'operazione richiesta.");
//	        	theElement.innerHTML = "Impossibile effettuare l'operazione richiesta.<br />";
//	        	theElement.innerHTML += "Errore riscontrato: " + theXhr.statusText;
	        }// else (if ! 200)
	}// if 4

} // callback();




function sendTextIframe() {
	// qui faccio scaricare al browser direttamente il contenuto del feed come src dell'iframe.
	Alert("Impossibile effettuare l'operazione, il tuo browser è troppo vecchio")
	
	// non riesco tuttavia a intervenire per parsificarlo! è il browser che renderizza il src del iframe!
}// caricaFeedIframe()



function sendTextAJAX(theXhr, text) {
    
	
	// impostazione controllo e stato della richiesta
	theXhr.onreadystatechange = function() { callback(theXhr); };
	// impostazione richiesta asincrona in GET
	// del file specificato
	try {
		theXhr.open("post", "J1.jsp", true);
	}
	catch(e) {
		// Exceptions are raised when trying to access cross-domain URIs 
		alert(e);
	}

	// rimozione dell'header "connection" come "keep alive"
	theXhr.setRequestHeader("connection", "close");
	var argument = "mode="+mode+"&aVal="+aVal+"&bVal="+bVal;
	// invio richiesta
	//
	theXhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	theXhr.send("text=" + encodeURIComponent(text));

} // caricaFeedAJAX()


function sendText()
{
	var inputText = MyGetElementById("inputText").value;
	
	if (inputText.includes("£") || inputText.length >= 1000) {
        var	xhr = myGetXmlHttpRequest();

        if ( xhr ) 
            sendTextAJAX(xhr, inputText); 
        else 
            sendTextIframe(); 
}
}

