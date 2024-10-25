<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
    <%@ page import="beans.Article" %>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="ISO-8859-1">
            <title>Search</title>
            <% Article article=(Article)session.getAttribute("article");%>

                <script type="text/javascript">

                    function handleKeyPress(e) {
                        var key = e.which || e.keyCode;
                        if (key === 53) {

                            // Carattere '%' premuto, invia automaticamente la richiesta
                            document.getElementById("searchForm").submit();
                        }
                    }

                    function permission() {
                        // Disabilita la textarea
                        var permissionValue = <%= article != null ? article.getPermission() : 1 %>
           if (permissionValue !== 0) {
                            document.getElementById("textarea").disabled = false;

                            // Puoi anche nascondere il pulsante se necessario
                            document.getElementById("permissionButton").style.display = "none";
                        }
                    }
                    function noPermission() {
                        // Disabilita la textarea
                        document.getElementById("textarea").disabled = true;

                        // Puoi anche nascondere il pulsante se necessario
                        document.getElementById("noPermissionButton").style.display = "none";
                    }
                </script>
        </head>

        <body>


            <form id="searchForm" action="ArticleServlet" method="post">
                <label> Inserire una stringa da cercare, % alla fine per invio:

                    <input type="text" id="text" name="stringa" maxlength=65 onkeyup="handleKeyPress(event)" required>
                </label>


                <textarea id="textarea" disabled>
<%= article != null ? article.getText() : "" %>
</textarea>

            </form>

            <button id="permissionButton" onclick="permission()">dammi permesso scrittura</button>
            <button id="noPermissionButton" onclick="noPermission()">tolgo permesso scrittura</button>
        </body>

        </html>