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
	
	
	public synchronized void   doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
	
		String stringa = (String) request.getParameter("stringa");
		Random random;
		String anagrammaVocali[] = new String[10];
		String vocali = "aeiou";
		for(int k = 0; k < 10; k++) {
			
		do {
			random = new Random();
			int i = random.nextInt(stringa.length());
			if (vocali.indexOf(stringa.charAt(i)) != -1) {
	            anagrammaVocali[k] = "" + stringa.charAt(i);
	        }
		}while(anagrammaVocali[k] == null || anagrammaVocali[k].length() == 0);
			
		for(int i = 1; i < stringa.length(); i++) {
			random = new Random();
			int j = random.nextInt(stringa.length());
			anagrammaVocali[k] += stringa.charAt(j);
		}
	}
		

		PrintWriter out = response.getWriter();
		for(String s : anagrammaVocali) {
			out.println(s);
		}
		out.close();
	}
	
	
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		
	}
	

}
