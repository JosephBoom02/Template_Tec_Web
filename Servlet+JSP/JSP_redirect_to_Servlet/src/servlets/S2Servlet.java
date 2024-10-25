package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class S2Servlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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
