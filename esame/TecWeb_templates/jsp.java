
//da una jsp invio dati JSON a una servlet 

    Gson gson = new Gson();
    String testo = null;

    if ((testo = (String)request.getParameter("testo")) != null) {
            String testoJson = (String)gson.toJson(testo);
            testo = null;
            response.sendRedirect("nomeServlet?testoJson="+testoJson);

        }
    







//ricezione JSON
 Gson gson = new Gson();
String testoJson = (String)request.getParameter("testoJson");
String testo = gson.fromJson(testoJson);
