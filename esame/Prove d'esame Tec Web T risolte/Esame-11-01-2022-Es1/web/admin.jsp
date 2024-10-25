<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page session="true" %>
<%@ page import="java.util.*" %>
<%@ page import="java.util.stream.*" %>
<%@ page import="java.time.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<h2>Sessioni attive:</h2>
<br/><br/><br/>
<% System.out.println("en "+ this.getServletContext().getAttribute("enable"));
Integer num = (Integer)this.getServletContext().getAttribute("enable");


if (num == 1) {
    try{
	List<HttpSession> activeSessions;
    LocalDateTime now = LocalDateTime.now();
    Map<HttpSession, LocalDateTime> state = (Map<HttpSession, LocalDateTime>) getServletContext().getAttribute("state");
    activeSessions = state.entrySet().stream().filter(e -> Duration.between(now, e.getValue()).toHours() <= 168).map(e -> e.getKey()).collect(Collectors.toList());
    Map<HttpSession, Integer> sess = (Map<HttpSession, Integer> )getServletContext().getAttribute("sess");
    Map<HttpSession, Integer> newMap = sess.entrySet().stream().filter(e -> activeSessions.contains(e.getKey())).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

    for (Map.Entry<HttpSession, Integer> entry : newMap.entrySet()) {
%>
      <div>  <%= entry.getKey().getId() %>: <%= entry.getValue() %> </div> <br/>
<%
    }
   }catch(Exception e){
    	System.out.println("Exception");
    	e.printStackTrace();
    }
%>
   
<%
}else 
%> <div> Errore enable</div>

</body>
</html>