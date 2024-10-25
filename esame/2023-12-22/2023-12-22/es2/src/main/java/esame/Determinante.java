package esame;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Determinante extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private static float get_cell(HttpServletRequest request, int row, int col) {
		return Float.parseFloat(request.getParameter(""+row+"-"+col));
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		float det = 0;
		det += this.get_cell(request, 0, 0)*this.get_cell(request, 1, 1)*this.get_cell(request, 2, 2);
		det += this.get_cell(request, 1, 0)*this.get_cell(request, 2, 1)*this.get_cell(request, 0, 2);
		det += this.get_cell(request, 2, 0)*this.get_cell(request, 0, 1)*this.get_cell(request, 1, 2);
		
		det -= this.get_cell(request, 0, 2)*this.get_cell(request, 1, 1)*this.get_cell(request, 2, 0);
		det -= this.get_cell(request, 1, 2)*this.get_cell(request, 2, 1)*this.get_cell(request, 0, 0);
		det -= this.get_cell(request, 1, 0)*this.get_cell(request, 0, 1)*this.get_cell(request, 2, 2);
		
		response.getWriter().print(det);
	}
}
