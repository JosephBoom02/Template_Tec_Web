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


public class S1 extends HttpServlet{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int enable = 0;


	@Override
	public void init(ServletConfig conf) throws ServletException
	{
		super.init(conf);
		this.getServletContext().setAttribute("enable", enable);
	}
	
	
	public void doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		
		String userName = request.getParameter("userName");
		String pwd = request.getParameter("pwd");
		String admin = "admin.jsp";
		String login = "indexLoginUser.jsp";
		
		
		if(userName.equals("admin") && pwd.equals("admin")) {
			 int e = 1;
			 this.getServletContext().setAttribute("enable", e);
			 login = admin;
		}
		
		response.sendRedirect(login);
			
			
			

	}
	
	
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
         
	}
	

}