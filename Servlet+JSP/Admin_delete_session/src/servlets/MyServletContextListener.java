package servlets;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.http.HttpSession;

import java.util.HashMap;
import java.util.Map;

@WebListener
public class MyServletContextListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        Map<String, HttpSession> activeSessions = new HashMap<>();
        sce.getServletContext().setAttribute("activeSessions", activeSessions);
    }


    @Override
    public void contextDestroyed(ServletContextEvent arg0) {
        throw new UnsupportedOperationException("Unimplemented method 'contextDestroyed'");
    }

}
