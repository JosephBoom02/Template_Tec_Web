<%@ page session = "true"%>

<!-- import di classi Java -->
<%@ page import = "esame.*"%>
<%@ page import = "java.util.*"%>

<!-- Prendere variabili da dispatcher -->
<%
	String adminName = (String) request.getParameter("username");
	String adminPwd = (String) request.getParameter("password");
    if (adminName != null && adminPwd != null && adminName.equals("admin") && adminPwd.equals("admin")){
        session.setAttribute("logged", 2);
    }
    else {
        session.setAttribute("logged", 0);
    }
%>


<html>
    <head>
        <title>Admin page</title>
        <% if (((int) session.getAttribute("logged")) != 2) { %> 
        <!-- Login centrato --> 
            <style>
	  	        body {
	  	    	    display: flex;
		            flex-direction: column;
		            align-items: center;
	  	        }
                input {
                    width: 150px;
                    margin: 2px;
                }
                .loginForm {
                    margin: auto;
                    border-radius: 25px 60px;
                    border: 2px solid black;
                    padding: 20px;
                }
            </style>
        <% } %>
    </head>
    <body>
        <% if (((int) session.getAttribute("logged")) != 2) { %>
            <div  class="loginForm">
                <form action="admin.jsp" method="post">
                    <div>
                        <label width="60"> Username: </label><br>
                        <input type="text" id="adminName" name="username" width="40"> <br>
                        <label width="60"> Password: </label> <br>
                        <input type="password" id="adminPwd" name="password" width="40"> <br><br>
                    </div>
                    <input type="submit" id="submitAdmin" value="Invia" width="40"> <br>
                    <input type="submit" formaction="login.jsp" value="Torna al Login">
                </form>
            </div>
            <% if (adminName != null && adminPwd != null && !adminName.equals("") && !adminPwd.equals("")) {%>
                <text style="color:red;"> Username o password errati! </text> <br><br>
            <% } %> 
        <% } else {%>
            <!-- Admin autenticato-->
            <h3>Benvenuto admin!</h3> 
        <% } %>
    
  </body>
</html>