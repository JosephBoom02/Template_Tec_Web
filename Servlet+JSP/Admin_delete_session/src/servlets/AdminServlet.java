package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;






public class AdminServlet extends HttpServlet {


protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String sessionId = request.getParameter("sessionId");
    if (sessionId != null) {
        // Termina la sessione specificata
        Map<String, HttpSession> activeSessions = (Map<String, HttpSession>) getServletContext().getAttribute("activeSessions");
        HttpSession sessionToTerminate = activeSessions.get(sessionId);
        if (sessionToTerminate != null) {
            sessionToTerminate.invalidate();
            activeSessions.remove(sessionId); // Rimuovi la sessione dalla mappa
            response.sendRedirect("admin.jsp"); // Reindirizza al pannello di amministrazione
        } else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "Sessione non trovata");
        }
    }
}


}
