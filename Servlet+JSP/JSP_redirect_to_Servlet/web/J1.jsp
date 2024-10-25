<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.Random" %>
<%@ page import="java.io.*" %>
<%
    String text = request.getParameter("text");
    if (text != null && text.matches("[a-zA-Z]*")) {
        Random rand = new Random();
        char randomChar = (char) ('a' + rand.nextInt(26));
        String modifiedText = text.replace(String.valueOf(randomChar), "");

        // Invia il risultato alla servlet S2
        response.sendRedirect("S2Servlet?modifiedText=" + URLEncoder.encode(modifiedText, "UTF-8") );
    } else {
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid input");
    }
%>