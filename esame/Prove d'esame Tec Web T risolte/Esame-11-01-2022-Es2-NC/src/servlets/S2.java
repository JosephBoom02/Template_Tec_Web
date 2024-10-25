package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;
import java.io.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.google.gson.*;


public class S2 extends HttpServlet{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static Map<String, String> matrix = new HashMap<>();
	private static final Gson gson = new Gson();
	
	  private void initializeMatrix() {
	        for (int i = 0; i < 10; i++) {
	            for (int j = 0; j < 10; j++) {
	                matrix.put(i + "-" + j, "");
	            }
	        }
	    }


	@Override
	public void init(ServletConfig conf) throws ServletException
	{
		super.init(conf);
		initializeMatrix();
	}
	
	
	public void doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		// Estrai i dati dalla richiesta e aggiorna la matrice
        StringBuilder requestBody = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                requestBody.append(line);
            }
        }
        
        // Logga il corpo della richiesta POST
        System.out.println("POST Request Body: " + requestBody.toString());


        Map<String, String> cellData = gson.fromJson(requestBody.toString(), Map.class);
        matrix.put(cellData.get("cellId"), cellData.get("content"));

        // Invia una risposta vuota
        response.setStatus(HttpServletResponse.SC_OK);
	}
	
	
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException{
		String jsonResponse = gson.toJson(matrix);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        out.print(jsonResponse);
        out.flush();
	}
	

}