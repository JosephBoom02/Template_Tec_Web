package Servlets;

import java.io.IOException;
import java.util.*;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Beans.AttrazioneTuristica;
import Beans.Turista;

import com.google.gson.Gson;

public class Server extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	private Gson gson;
	private List<AttrazioneTuristica> at;
	private int K;
	
	@Override
	public void init(ServletConfig conf) throws ServletException
	{
		super.init(conf);
		gson = new Gson();
		List<Turista> turisti = new ArrayList<Turista>();
		inizializeAT();
		K = Integer.parseInt(this.getServletContext().getInitParameter("K"));
		this.getServletContext().setAttribute("turisti", turisti);
		
	}
	
	public void doGet(HttpServletRequest request,
            HttpServletResponse response)
    throws ServletException, IOException
	{
		double x = Double.parseDouble(request.getParameter("x").trim());
		double y = Double.parseDouble(request.getParameter("y").trim());
		System.out.println("Le Coordinate ricevute sono: "+x+" "+y);
		
		List<Turista> lt = (ArrayList<Turista>)this.getServletContext().getAttribute("turisti");
		List<AttrazioneTuristica> attrazioniVisibili = new ArrayList<AttrazioneTuristica>();
		Turista t = new Turista();
		t.setX(x);
		t.setY(y);
		HttpSession session = request.getSession(false);
		if(session == null)
		{	
			lt.add(t);
		}
		int touristCounter =0;
		for(Turista tt : lt)
		{
			if(calcolaDistanza(x,y,tt)<100)
				touristCounter++;
		}
		if(touristCounter<=11)
		{
			for(AttrazioneTuristica att : at)
			{
				if(calcolaDistanza(att.getX(),att.getY(),t)<=K)
				{
					attrazioniVisibili.add(att);
				}
			}
			
			AttrazioneTuristica[] risultato = new AttrazioneTuristica[attrazioniVisibili.size()];
			risultato = attrazioniVisibili.toArray(risultato);
			String res = gson.toJson(risultato);
			System.out.println(" "+res);
			response.getWriter().println(res);
			return;
		}
		
		
		AttrazioneTuristica[] risultato = new AttrazioneTuristica[attrazioniVisibili.size()];
		risultato = attrazioniVisibili.toArray(risultato);
		String res = gson.toJson(risultato);
		System.out.println(" "+res);
		response.getWriter().println(res);
		
		
	}

	private void inizializeAT() {
		// TODO Auto-generated method stub
		
		this.at = new ArrayList<AttrazioneTuristica>();
		AttrazioneTuristica g = new AttrazioneTuristica();
		g.setX(0);
		g.setY(50);
		g.setDescrizione("Una bella fontana con delle statue");
		g.setNome("Fontana del Nettuno");
		at.add(g);
		
		g = new AttrazioneTuristica();
		g.setX(30);
		g.setY(150);
		g.setDescrizione("la torre degli Asinelli e Garisenda");
		g.setNome("Le due Torri");
		at.add(g);
		
		g = new AttrazioneTuristica();
		g.setX(124);
		g.setY(8);
		g.setDescrizione("Una Basilica su un colle");
		g.setNome("Basilica di San Luca");
		at.add(g);
		
		g = new AttrazioneTuristica();
		g.setX(0);
		g.setY(0);
		g.setDescrizione("Un bel palazzo");
		g.setNome("Palazzo Re Enzo");
		at.add(g);
		
		g = new AttrazioneTuristica();
		g.setX(34);
		g.setY(79);
		g.setDescrizione("La casa dove abita il tutor");
		g.setNome("Casa Mia");
		at.add(g);
	}
	
	private int calcolaDistanza(double x, double y, Turista g) {
		// TODO Auto-generated method stub
		return (int) Math.round(Math.sqrt(Math.pow((g.getX()-x), 2)+Math.pow((g.getY()-y),2)));
		
	}

}
