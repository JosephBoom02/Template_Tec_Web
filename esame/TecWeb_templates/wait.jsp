<%@ page session="true"%>
<html>
   <head>
		<meta charset="ISO-8859-1">
      <title>Start Web Application</title>
		<link type="text/css" href="styles/default.css" rel="stylesheet"></link>
   </head>
   <body>

      <!-- 
       ...so we offer the user something to read, meanwhile.
      
      This is the first page being shown, while the JSF Servlet starts up the environment,
      upon the first reqeust.
      This message avoid letting the user linger without knowing what's going on.
      -->
 
      <h1>
      	Server sovraccarico: la richiesta viene rallentata di 10 secondi.
      </h1>
      <%
      
      Thread thread = new Thread(() -> {
          try {
              // Blocca il thread per 10 secondi
              Thread.sleep(10000);
          } catch (InterruptedException e) {
              e.printStackTrace();
          }
          
          request.getRequestDispatcher("S1.java").forward(request, response);
      
      %>

   </body>
</html>

