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

<%

Random r = new Random();
char c = (char) (r.nextInt(26) + 'a');

String text = request.getParameter("testo");

String newText = "";

for(int i = 0; i < text.length(); i++){
	if(text.charAt(i) != c){
		newText += text.charAt(i);
	}
}
System.out.println("carattere scelto J1: " + c);
response.sendRedirect("S2?newText="+newText);

%>

</body>
</html>