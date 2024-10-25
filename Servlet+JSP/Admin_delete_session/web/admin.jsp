<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="javax.servlet.http.*" %>
<%@ page import="java.io.*" %>
<%
    // Verifica se l'utente è autenticato come amministratore
    // Si può eliminare?
    HttpSession session = request.getSession(false);
    if (session == null || session.getAttribute("admin") == null) {
        response.sendRedirect("login.jsp"); // Reindirizza al login se non autenticato
        return;
    }
%>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel</title>
</head>
<body>
    <h1>Pannello di Amministrazione</h1>
    <h2>Sessioni attive negli ultimi 7 giorni</h2>
    <table border="1">
        <tr>
            <th>ID Sessione</th>
            <th>Data di Creazione</th>
            <th>Numero di Richieste</th>
            <th>Termina</th>
        </tr>
        <%
            // Recupera le sessioni attive
            Map<String, HttpSession> activeSessions = (Map<String, HttpSession>) application.getAttribute("activeSessions");
            application.session.setAttribute("activeSessions", activeSessions);
            if (activeSessions != null) {
                for (Map.Entry<String, HttpSession> entry : activeSessions.entrySet()) {
                    HttpSession activeSession = entry.getValue();
                    long creationTime = activeSession.getCreationTime();
                    Date creationDate = new Date(creationTime);
                    int requestCount = (Integer) activeSession.getAttribute("requestCount");

                    out.println("<tr>");
                    out.println("<td>" + entry.getKey() + "</td>");
                    out.println("<td>" + creationDate + "</td>");
                    out.println("<td>" + requestCount + "</td>");
                    out.println("<td><form action='AdminServlet' method='post'><input type='hidden' name='sessionId' value='" + entry.getKey() + "'/><input type='submit' value='Termina'/></form></td>");
                    out.println("</tr>");
                }
            }
        %>
    </table>
</body>
</html>
