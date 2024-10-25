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


public class S2 extends HttpServlet{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Override
	public void init(ServletConfig conf) throws ServletException
	{
		super.init(conf);
		
		
	}
	
	
	public synchronized void   doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
	
		String stringa = (String) request.getParameter("stringa");
		Random random;
		String anagrammaConsonanti[] = new String[10];
		String consonanti = "qwrtypsdfghjklzxcvbm";
		for(int k = 0; k < 10; k++) {
			
		do {
			random = new Random();
			int i = random.nextInt(stringa.length());
			if (consonanti.indexOf(stringa.charAt(i)) != -1) {
	            anagrammaConsonanti[k] = "" + stringa.charAt(i);
	        }
		}while(anagrammaConsonanti[k] == null || anagrammaConsonanti[k].length() == 0);
			
		for(int i = 1; i < stringa.length(); i++) {
			random = new Random();
			int j = random.nextInt(stringa.length());
			anagrammaConsonanti[k] += stringa.charAt(j);
		}
	}
		PrintWriter out = response.getWriter();
		for(String s : anagrammaConsonanti) {
			out.println(s);
		}
		out.close();
	}
	
	
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		
	}
	

}
