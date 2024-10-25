package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.google.gson.*;
import beans.User;


public class S1 extends HttpServlet{

		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		private Gson g;

		@Override
		public void init(ServletConfig conf) throws ServletException {
			super.init(conf);
			g = new Gson();
			Map<String, User> utentiRegistrati = new HashMap<String, User>();
			User u = new User();
			u.setUserName("pinco pallino");
			u.setPwd("asdasd");

			utentiRegistrati.put(u.getUserName(), u);

			u = new User();
			u.setUserName("tizio");
			u.setPwd("asdasd");

			utentiRegistrati.put(u.getUserName(), u);

			u = new User();
			u.setUserName("caio");
			u.setPwd("asdasd");

			utentiRegistrati.put(u.getUserName(), u);

			u = new User();
			u.setUserName("sempronio");
			u.setPwd("asdasd");


			utentiRegistrati.put(u.getUserName(), u);

			u = new User();
			u.setUserName("admin");
			u.setPwd("admin");

			utentiRegistrati.put(u.getUserName(), u);

			this.getServletContext().setAttribute("utentiRegistrati", utentiRegistrati);

			

		}

		public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
			String name = request.getParameter("userName");
			Map<String, User> utentiRegistrati = (Map<String, User>) this.getServletContext().getAttribute("utentiRegistrati");
			User utente = utentiRegistrati.get(name);
			HttpSession session = request.getSession();
			if (utente == null) {
				// utente non registrato

				RequestDispatcher rd = getServletContext().getRequestDispatcher("/index.jsp");
				rd.forward(request, response);
				return;
			}
			session.setAttribute("currentUser", utente);

			if (utente.getUserName().compareTo("admin") == 0 && utente.getPwd().compareTo("admin") == 0) {
				RequestDispatcher rd = getServletContext().getRequestDispatcher("/adminPage.jsp");
				rd.forward(request, response);
				return;
			}

			if (utente.getPwd().compareTo(request.getParameter("pwd")) != 0) {
				// pwd errata

				RequestDispatcher rd = getServletContext().getRequestDispatcher("/index.jsp");
				rd.forward(request, response);
				return;
			}

			utente.setSession(session);

			
			response.sendRedirect("cruciverba.html");

		}

		public void doGet(HttpServletRequest request,
				HttpServletResponse response)
				throws ServletException, IOException {
			
			

		}

	}

	

