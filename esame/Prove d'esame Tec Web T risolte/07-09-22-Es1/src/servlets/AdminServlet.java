package servlets;

import javax.servlet.*;
import java.util.ArrayList;
import javax.servlet.http.*;
import java.io.IOException;
import beans.Article;



public class AdminServlet extends HttpServlet {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;


    // Gestisce le richieste HTTP di tipo GET
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	boolean isAdminAuthenticated = true;

        if (isAdminAuthenticated) {
            // Ottieni l'elenco di tutti gli articoli
            ArrayList<Article> listArticle = (ArrayList<Article>)getServletContext().getAttribute("listArticle");

            // Passa l'elenco di articoli alla JSP per la visualizzazione
            request.setAttribute("listArticle", listArticle);
            request.getRequestDispatcher("/admin.jsp").forward(request, response);
        } else {
            response.sendRedirect("/index.jsp");  // Reindirizza all pagina di login
        }
    }

    // Gestisce le richieste HTTP di tipo POST
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	
    	String articleIdToRevoke = request.getParameter("articleId");
        ArrayList<Article> listArticle = (ArrayList<Article>) getServletContext().getAttribute("listArticle");

        // Trova l'articolo nella lista
        Article articleToRevoke = listArticle.stream()
                .filter(article -> article.getId().equals(articleIdToRevoke))
                .findFirst()
                .orElse(null);

        if (articleToRevoke != null) {
            // Revoca il permesso di scrittura per l'articolo
            articleToRevoke.setPermission(0);
            
    	
}
        
        request.getRequestDispatcher("/admin.jsp").forward(request, response);
}
}
 

