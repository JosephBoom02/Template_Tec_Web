package servlets;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.websocket.*;
import javax.websocket.server.*;

import com.google.gson.Gson;

import beans.OperationReq;
import beans.OperationResp;
import java.util.*;

@ServerEndpoint("/actions")
public class ProvaWS {

	private Session sessione;
	private Gson g;
	private Map<String, Integer> reqCounter = new HashMap<String, Integer>(); // change name

	private Map<String, "classe"> lastOperations = new HashMap<String,"classe">();
	
	@OnOpen
	public void open(Session session)
	{
		this.sessione = session;
		g = new Gson();
		System.out.println("Connessione Aperta ");
		reqCounter.put(session.getId(), 0);
		lastOperations.put(session.getId(), new OperationResp());
	}

	@OnClose
	public void close(Session session) {
		System.out.println("Connessione Chiusa ");
	}

	@OnMessage
	public void handleMessage(String message, Session session) throws IOException, EncodeException {

		///

		sendback(g.toJson(resp));
	}

	private void sendback(String message) throws IOException, EncodeException {
		// TODO Auto-generated method stub
		try {
			System.out.println("Sto inviando: " + message);
			this.sessione.getBasicRemote().sendText(message);

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	@OnError
	public void onError(Session session, Throwable throwable) {
		System.out.println("Errore ");
	}

}
