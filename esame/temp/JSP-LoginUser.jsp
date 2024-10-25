<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ page import="java.util.*" %>
        <%@ page import="com.google.gson.*" %>
            <%@ page import="beans.*" %>
                <!DOCTYPE html>
                <html>

                <head>
                    <meta charset="ISO-8859-1">
                    <title>Insert title here</title>
                </head>

                <body>

                    <p>
                        ..Benvenuto, loggati... &nbsp;
                    </p>
                    <br />
                    <form action="LoginUser" method="post">
                        <p>User:</p>
                        <input type="text" name="userName" size="30" required /><br>
                        <p>Password:</p>
                        <input type="password" name="pwd" size="30" required /><br><br>
                        <input type="submit" value="Log In" />
                    </form>

                </body>

                </html>