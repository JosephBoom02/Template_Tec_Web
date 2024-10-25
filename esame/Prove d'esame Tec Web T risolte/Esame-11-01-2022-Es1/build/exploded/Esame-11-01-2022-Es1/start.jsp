<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.util.*" %>
    <%@ page import="com.google.gson.*" %>
    <%@ page import="beans.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>


</head>
<body>


<form id="form" action="J1.jsp" method="post">
	<p>Inserire un testo di caratteri alfabetici</p> <br>
	<input type="text" id="testo" name="testo"  maxlength="1000" required onkeypress="handleKeyPress(event)" onclick="clean()">
</form>


<div>

<div>
Risultato:
</div>

Nuovo testo: <input type="text" id = "newText" readonly>
Lunghezza: <input type = "text" id = "num" readonly>


</div>


<script>

function isAlpha(character) {
    // Verifica se il carattere � alfanumerico usando una regular expression
    var alphaRegex = /^[a-zA-Z ]+$/;
    return alphaRegex.test(character);
}

function clean(){
	 document.getElementById("newText").value = "";
	 document.getElementById("num").value = "";
}

function handleKeyPress(e) {
    var key = e.keyCode;
    console.log("key +", key);
    if (key === 163) {
    	console.log("dentro");
    	
    	var text = document.getElementById("testo").value;
    	
    	if( isAlpha(text)){
    		document.getElementById("form").submit();
    		document.getElementById("testo").value = "";
    		 
    		
    		
    	}else {
    		alert("Errore carattere NON alfabetico");
    	document.getElementById("testo").value = "";

    	}
    	
    	e.preventDefault();

    }
}


function displayDataFromXML(xmlString) {
    // Effettua il parsing della stringa XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // Recupera i dati dalla stringa XML
    const result = xmlDoc.getElementsByTagName("result")[0].textContent;
    const num = xmlDoc.getElementsByTagName("num")[0].textContent;

    // Assegna i valori ai tuoi elementi HTML
    document.getElementById("newText").value = result;
    document.getElementById("num").value = num;
}

// Recupera il parametro XML dalla query string dell'URL
const urlParams = new URLSearchParams(window.location.search);
const xmlString = urlParams.get('XML');

// Chiama la funzione passando la stringa XML
displayDataFromXML(xmlString);





</script>




</body>
</html>