<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
   <%@ page import="com.google.gson.*" %>
   




<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<script>

function isAlphanumeric(character) {
    // Verifica se il carattere � alfanumerico usando una regular expression
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(character);
}

function buttonOn(e){
	if(isAlphanumeric(e.key) === true){
	var testo = document.getElementById("testo").value;
	
	var dim = testo.length;
	if(dim >= 10){
		document.getElementById("submit").disabled = false;
	}
	}else{ alert("carattere NON alfa-numerico");
	document.getElementById("testo").value = "";
	}
}

</script>

</head>

<body>

<%
    Gson gson = new Gson();
    String testo = null;

    if ((testo = (String)request.getParameter("testo")) != null) {
            String testoJson = (String)gson.toJson(testo);
            testo = null;
            response.sendRedirect("S1?testoJson="+testoJson);
          //  request.setAttribute("testoJson", testoJson);
          //  getServletContext().getRequestDispatcher("/S1").forward(request, response);
        }
    
%>

<%String testoR = (String) request.getParameter("testoR");
String count = (String) request.getParameter("count");
%>

<form action="#" method="post">
<p>Inserire un testo di caratteri alfa-numerici</p> <br>
<input type="text" id="testo" name="testo"  maxlength="1000" required onkeyup="buttonOn(event)">
<input type="submit" id="submit" name = "buttonSubmit" value="invio Json" disabled>
</form>

<p>testo: <%= testoR == null ? null : testoR %></p>
<p>c: <%= count == null ? null : count %></p>



</body>
</html>