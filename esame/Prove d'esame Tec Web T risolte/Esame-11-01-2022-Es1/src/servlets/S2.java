package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.util.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.google.gson.*;


public class S2 extends HttpServlet{
	
	private Map<HttpSession, LocalDateTime> state;
	private Map<HttpSession, Integer> sess;


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Override
	public void init(ServletConfig conf) throws ServletException
	{
		super.init(conf);
		state = new HashMap<>();
		sess = new HashMap<>();
		this.getServletContext().setAttribute("state", state);
		this.getServletContext().setAttribute("sess", sess);
	}
	
	
	public void doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		
		
	}
	
	
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		
		
		Map<HttpSession, LocalDateTime> state = (Map<HttpSession, LocalDateTime>) this.getServletContext().getAttribute("state");
		Map<HttpSession, Integer> sess = (Map<HttpSession, Integer>) this.getServletContext().getAttribute("sess");
		boolean b = state.containsKey(request.getSession());
		if(b == true) { 
			state.replace(request.getSession(), LocalDateTime.now());
			int x = sess.get(request.getSession());
			sess.replace(request.getSession(), ++x);
		}
		else  {
			state.put(request.getSession(), LocalDateTime.now());
			sess.put(request.getSession(), 0);
		}
		
		
		this.getServletContext().setAttribute("sess", sess);
		this.getServletContext().setAttribute("state", state);
		
		for(HttpSession s : state.keySet()) {
			System.out.println(s.getId());
		}
	
		
		response.setContentType("text/xml;charset=UTF-8");
		Random r = new Random();
		char c = (char) (r.nextInt(26) + 'a');

		String text = request.getParameter("newText");

		String newText = "";

		for(int i = 0; i < text.length(); i++){
			if(text.charAt(i) != c){
				newText += text.charAt(i);
			}
		}
		System.out.println("carattere scelto S2 : " + c);
		
		String XML = "<response><result>" + newText + "</result><num>" + newText.length() + "</num></response>";
	//	response.getWriter().print(XML);

		response.sendRedirect("start.jsp?XML="+XML);

	}
	

}