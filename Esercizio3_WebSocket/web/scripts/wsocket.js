const socket = new WebSocket("ws://localhost:8080/07_TecWeb_solved/actions");

function send( data) {
    var json = JSON.stringify(data);
	
    socket.send(json);
}


socket.onmessage =  function (event){
	
	console.log("[socket.onmessage]", event.data);
	
	var message = JSON.parse(event.data);
	/*
	ottenuto il messaggio dalla webSocket lo gestisco in base al problema
	 */
	
}

/*
function myFunction()
{
	var operationReq = {};
	operationReq.op1 = op1;
	operationReq.op2 = op2;
	operationReq.operazione = op;
	//fai Json anche se è una singola variabile (passala come Stringa) da server poi gson.fromJson(stringa,String.class),
	send(operationReq);
	
}*/

