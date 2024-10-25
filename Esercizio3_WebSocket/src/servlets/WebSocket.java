package servlets;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.websocket.*;
import javax.websocket.server.*;

import com.google.gson.Gson;

import java.util.*;
import java.util.concurrent.CopyOnWriteArraySet;

@ServerEndpoint("/actions")
public class WebSocket {
	
	private Session sessione;
	private Gson g;
	private Set<String> users = new HashSet<String>();
	private static final Set<WebSocket> calcEndpoints = new CopyOnWriteArraySet<>();
	
	@OnOpen
	public void open(Session session)
	{
		this.sessione = session;
		g = new Gson();
		System.out.println("Connessione Aperta ");
		calcEndpoints.add(this);
		users.add(session.getId());
		System.out.print("ho finito la open");
	}
	
	@OnClose
	public void close(Session session)
	{
		System.out.println("Connessione Chiusa ");
	}
	
	@OnMessage
	public void handleMessage(String message, Session session)throws IOException, EncodeException {
			String handledMessage = g.fromJson(message,String.class);
			//sendback(g.toJson(resp));
			//broadcast(g.toJson(resp));
		}

	private void sendback(String message) throws IOException, EncodeException {
		// TODO Auto-generated method stub
		try {
			System.out.println("Sto inviando: "+message);
			this.sessione.getBasicRemote().sendText(message);
			
		} catch (IOException  e) {
            e.printStackTrace();
        }
		
	}

	@OnError
	public void onError(Session session, Throwable throwable)
	{
		System.out.println("Errore ");
		throwable.printStackTrace();
	}
	
	private static void broadcast(String message) throws IOException, EncodeException {
		
        calcEndpoints.forEach(endpoint -> {
            try {
                endpoint.sessione.getBasicRemote().sendText(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }


}
