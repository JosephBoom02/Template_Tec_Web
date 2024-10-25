<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="com.google.gson.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%
Gson g = new Gson();
String newString = (String)request.getAttribute("newString");
String testo = g.fromJson(newString, String.class);
System.out.println("TestoJ2: " + testo);
int count = 0;

for(int i = 0; i < testo.length(); i++){
	String oldS = ""+testo.charAt(i);
	String newS = oldS.toUpperCase();
	if(oldS == newS) count++;
	
}
String countS = ""+count;
System.out.println("CountJ2: " + countS);
//request.setAttribute("count", countS);
//request.setAttribute("testoR", testo);
//request.getRequestDispatcher("testo.jsp").forward(request, response);
response.sendRedirect("testo.jsp?testoR="+testo+"&count="+count);
%>





</body>
</html>