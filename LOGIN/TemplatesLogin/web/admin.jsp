<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Admin</title>
</head>
<body>

<%  String username="";
    String password="";
    username = request.getParameter("username");
    password = request.getParameter("password");

    out.println("<h2>Sessioni attive:</h2>");

    Map<String, Optional<HttpSession>> sessions = dati.getSessions();
    out.println("<ul>");
    for(String user : sessions.keySet()){
        if(sessions.get(user).isPresent()){
            HttpSession s = sessions.get(user).get();
            out.println("<li>" + user + ": " + s.getId() + "</li>");
        }
    }
    out.print("</ul>");
%>
</body>
</html>
