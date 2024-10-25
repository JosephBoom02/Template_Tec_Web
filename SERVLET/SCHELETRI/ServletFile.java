package servlets;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import beans.Input;

public class ServletFile extends HttpServlet{

	private static final long serialVersionUID = 1L;
	private File dir;
	private Gson gson;
	
	public void init(ServletConfig config) throws ServletException{
		super.init(config);
		String nomeDir = config.getInitParameter("Dir");
		String dirPath = this.getServletContext().getRealPath("/"+nomeDir);
		dir = new File(dirPath);
		if(! dir.exists() || ! dir.isDirectory()) {
			throw new ServletException("Il parametro directory non è presente nel server!");
		}
		this.getServletContext().setAttribute("dirPath", dirPath);
		gson = new Gson();
	}
	
	public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		File [] listFile = dir.listFiles();
		String responseJ = request.getParameter("jsonBody");
		if(responseJ == null) {
			throw new ServletException("Parametri nulli!");
		}
		else {
			Input in = gson.fromJson(responseJ,Input.class);
			String nomeFile = in.getParola();
			String parola = in.getNomeFile();
			BufferedReader reader;
			boolean trovato = false;
			for(File temp : listFile) {
				int puntoIndex = temp.getName().lastIndexOf('.');
				if(temp.getName().substring(0, puntoIndex).equals(nomeFile)) {
					File fTemp = new File(nomeFile+"_temp.txt");
					fTemp.createNewFile();
					trovato = true;
					reader = new BufferedReader (new FileReader(temp));
					FileWriter fout = new FileWriter(fTemp);
					String linea;
					while((linea=reader.readLine()) != null) {
						for(char car : linea.toCharArray()) {
							if(car>='a' && car<='z') {
								car = (char) (car + (char)('A'-'a'));
							}
							fout.append(car);
						}
					}
					fout.close();
					reader.close();
					temp.delete();
					fTemp.renameTo(temp);
					break;
				}
			}
			request.getSession().setAttribute("trovato", trovato);
			RequestDispatcher rp = this.getServletContext().getRequestDispatcher("./Jsp.jsp");
			rp.forward(request, response);
		}
	}

}
