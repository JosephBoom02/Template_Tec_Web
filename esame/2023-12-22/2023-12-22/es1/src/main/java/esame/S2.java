package esame;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

/**
 * Servlet implementation class S2
 */
public class S2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	public void init() throws ServletException {
		this.getServletContext().setAttribute("totalAuguri", 0);
		this.getServletContext().setAttribute("totalFelici", 0);
		Map<String, Integer> sessioni = new HashMap<String, Integer>();
		this.getServletContext().setAttribute("mappaSessioni", sessioni);
	}
    
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String text = (String) request.getAttribute("text");
		String substring = "Felici";
		
		Gson g = new Gson();

		int count = 0;
		int index = text.indexOf(substring);

		while (index != -1) {
	    	count++;
	    	// Cerca l'occorrenza successiva
	    	index = text.indexOf(substring, index + 1);
		}
		HttpSession session = request.getSession();
		
		Response resp = new Response();
		Integer countAuguri = (Integer) request.getAttribute("count");
		resp.setCountAuguri(countAuguri);
		resp.setCountFelici(count);
		synchronized(this) {
			getServletContext().setAttribute("totalAuguri", 
					(Integer) getServletContext().getAttribute("totalAuguri") + countAuguri
					);
			getServletContext().setAttribute("totalFelici", 
					(Integer) getServletContext().getAttribute("totalFelici") + count
				);
			Map<String, Integer> sessioni = (Map<String, Integer>) getServletContext().getAttribute("mappaSessioni");
			Integer richieste = sessioni.get(session.getId());
			if (richieste == null) {
				sessioni.put(session.getId(), 1);
			}
			else {
				sessioni.put(session.getId(), richieste + 1);
			}
			getServletContext().setAttribute("mappaSessioni", sessioni);
			
		}
		request.setAttribute("response", g.toJson(resp));
		this.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response); 
	}

}
