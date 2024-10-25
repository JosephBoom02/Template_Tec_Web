package servlets;

import bean.Dati;
import bean.Tavolo;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Login2 extends HttpServlet {

    @Override
    public void init(ServletConfig conf) throws ServletException {
        super.init(conf);
        //dati con scope application
        dati = (Dati) getServletContext().getAttribute("dati");

        ServletContext context = getServletContext();
        context.setAttribute("dati", dati);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String r = req.getParameter("req");
        Dati dati = (Dati) getServletContext().getAttribute("dati");


        if(username.isBlank()){
            RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/loginFailure.jsp?err=noUsername");
            dispatcher.forward(req, resp);
        }

        if(password.isBlank()){
            RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/loginFailure.jsp?err=noPass");
            dispatcher.forward(req, resp);
        }

        numero = Integer.parseInt(req.getParameter("numero"));

        

        if (r.equals("login")) {

            checkLogin = checkLogin(username, numero, req.getSession());
            if (checkLogin) {
                if (username.equals("admin")) {
                    RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/admin.jsp");
                    dispatcher.forward(req, resp);

                }

                else {
                    RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/drink.jsp");
                    dispatcher.forward(req, resp);
                    System.out.println("Ricevuto login da Username: " + username + " numero: " + numero);
                }
            } else {

                getServletContext().getRequestDispatcher("/loginFailure.jsp?err=login").forward(req, resp);

            }
        }
        if (r.equals("registration")) {
            boolean checkTavolo = registration(username, numero);
            if (checkTavolo) {
                dati.addUser(username, numero);
                dati.getSessions().put(username, Optional.empty());
                dati.getCocktailOrderedByUser().put(username, new ArrayList<>());

                RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/registrationSuccess.html");
                
                //resp.sendRedirect("/registrationSuccess.html");
                System.out.println("Ricevuta registrazione da Username: " + username + " numero: " + numero);

                dispatcher.forward(req, resp);
            } else {
                RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/loginFailure.jsp?err=registration");

                dispatcher.forward(req, resp);
            }
        }
    }

    public boolean registration(String username, int numero) {
        boolean check = false;
        //controllo che il tavolo sia tra quello disponibili
        for(Tavolo t : tavoli) {
        	if(t.getNumero() == numero){ 
                check = true;
                break;
            }
        }
        return check;
    }

    public boolean checkLogin(String username, int numero, HttpSession s) throws ServletException, IOException {
        boolean check = false;
        Dati dati = (Dati) getServletContext().getAttribute("dati");
        if (dati.getUsers().containsKey(username) && dati.getUsers().get(username) == numero){
            //controllo che non ci sia la sessione per quell'utente
            if(s.isNew() || !dati.getSessions().get(username).isEmpty()){
                check=true;
            }else if (dati.getSessions().get(username).isEmpty()) {
                System.out.println("Loggato utente: " + username);
                dati.getSessions().put(username, Optional.of(s));
                check = true;
            }
        }



        return check;
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {

            
    }
}
