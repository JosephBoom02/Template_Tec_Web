<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<%
	String text = (String) request.getParameter("textField");
	String substring = "Auguri";

	int count = 0;
	int index = text.indexOf(substring);

	while (index != -1) {
    	count++;
    	// Cerca l'occorrenza successiva
    	index = text.indexOf(substring, index + 1);
	}
	request.setAttribute("count", count);
	request.setAttribute("text", text);
	this.getServletContext().getRequestDispatcher("/S2").forward(request, response); 
%>
<head>
<meta charset="ISO-8859-1">
<title>J1</title>
</head>
<body>

</body>
</html>