package it.unibo.tw.web.servlets; // da modificare

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class BasicServlet extends HttpServlet{

	
	private static final long serialVersionUID = 1L;

	public void init(ServletConfig config)throws ServletException {
		super.init(config);
		// se voglio estrarre parametri inseriti nel web.xml config.getInitParameter("nomeParam"); (stringhe)
		// se voglio aprire una directory dentro il server:
		//this.getServletContext().getRealPath("/"+dir).trim() // trim per sicurezza
	}
	
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws  ServletException,IOException{
		
	}
	
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
	
	}
}
