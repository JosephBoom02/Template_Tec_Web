<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>

<% 
	if(request.getParameter("messaggio") != null){

	    this.getServletContext().getRequestDispatcher("/s2").forward(request,response);
	}
	else{
		response.sendRedirect("./errors/notfound.html");
	}
%>
