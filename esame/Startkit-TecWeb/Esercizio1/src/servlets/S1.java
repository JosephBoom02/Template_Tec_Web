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


	@Override
	public void init(ServletConfig conf) throws ServletException
	{
		super.init(conf);
	}
	
	
	public void doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		
	}
	
	
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
         
	}
	

}