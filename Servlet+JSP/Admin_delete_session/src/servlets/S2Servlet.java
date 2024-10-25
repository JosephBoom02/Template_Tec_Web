package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.Map;

public class S2Servlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //Sessioni
        HttpSession session = request.getSession();
        Map<String, HttpSession> activeSessions = (Map<String, HttpSession>) getServletContext().getAttribute("activeSessions");

        // Aggiungi la sessione se non esiste già
        if (!activeSessions.containsKey(session.getId())) {
            activeSessions.put(session.getId(), session);
            session.setAttribute("requestCount", 0); // Inizializza il conteggio delle richieste
        }

        // Incrementa il conteggio delle richieste
        int requestCount = (Integer) session.getAttribute("requestCount");
        session.setAttribute("requestCount", requestCount + 1);

        String modifiedText = request.getParameter("modifiedText");
        if (modifiedText != null) {
            int length = modifiedText.length();

            response.setContentType("application/xml");
            PrintWriter out = response.getWriter();
            out.println("<result>");
            out.println("<modifiedText>" + modifiedText + "</modifiedText>");
            out.println("<length>" + length + "</length>");
            out.println("</result>");
        } else {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid input");
        }

        RequestDispatcher rp = this.getServletContext().getRequestDispatcher("./index.jsp");
		rp.forward(request, response);
    }
}
