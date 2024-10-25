<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ page import = "beans.Article" %>
    <%@ page import = "java.util.ArrayList" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form action="AdminServlet" method="get">
<label>
Username:
<input id="usernameAdmin" type="text"  name = "usernameAdmin">
</label>
<label>
Password:
<input id="passwordAdmin" type="text" name = "passwordAdmin">
</label>
<input id="submitAdmin" type="submit">

</form>

<form action="AdminServlet" method="post">

<%

ArrayList<Article> article = (ArrayList<Article>)request.getAttribute("listArticle");

	for(Article a : article){
		%> <input type="text" name="articleId" value="<%= a.getId() %>" disabled>
	<button id="noPermissionButton">tolgo permesso scrittura a <%=a.getId() %></button>
	<% }
%>

</form>

</body>
</html>