package servlets;

import javax.servlet.*;
import java.util.ArrayList;
import javax.servlet.http.*;
import java.io.IOException;
import beans.Article;



public class ArticleServlet extends HttpServlet {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

    @Override
    public void init() throws ServletException {
    	Article article[]= new Article[3];
    	
    	for(int i = 0; i < article.length; i++) {
    		article[i] = new Article();
    	}
    	article[0].setId("matematica");
    	article[1].setId("italiano");
    	article[2].setId("storia");
    	
    	article[0].setPermission(1);
    	article[1].setPermission(1);
    	article[2].setPermission(1);
    	
    	article[0].setAcceduto(false);
    	article[1].setAcceduto(false);
    	article[2].setAcceduto(false);
    	
    	article[0].setText("La matematica è molto complicata");
    	article[1].setText("L'italiano è molto complicata");
    	article[2].setText("La storia è molto complicata");
    	
    	ArrayList<Article> listArticle = new ArrayList<Article>();
    	listArticle.add(article[0]);
    	listArticle.add(article[1]);
    	listArticle.add(article[2]);
    	this.getServletContext().setAttribute("article", article);
    	this.getServletContext().setAttribute("listArticle", listArticle);
    	
    	
    }

    // Gestisce le richieste HTTP di tipo GET
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // Gestisce le richieste HTTP di tipo POST
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	
    	HttpSession session = request.getSession(true);
    	String string = request.getParameter("stringa");
    	String correct = null;
    	int index = string.indexOf('%');
    	correct = string.substring(0, index);
    	
    	Article article[] = (Article[]) this.getServletContext().getAttribute("article");
    	ArrayList<Article> listArticle = (ArrayList<Article>) this.getServletContext().getAttribute("listArticle");
    	Article a = new Article();
    	a.setId(correct);
    	a.setText("");
    	a.setPermission(1);
    	a.setAcceduto(true);
    	listArticle.add(a);
    	for(int i = 0; i< article.length; i++) {
    		if(correct.equalsIgnoreCase(article[i].getId())) {
    			a.setText(article[i].getText());
    			//System.out.println("trovato");
    			break;
    		}
    	//	System.out.println("Articolo " + article[i] + ":" + correct);
    }
		session.setAttribute("article", a);
		this.getServletContext().setAttribute("listArticle", listArticle);
		request.getRequestDispatcher("/cerca.jsp").forward(request, response);
    	
}
}
 
