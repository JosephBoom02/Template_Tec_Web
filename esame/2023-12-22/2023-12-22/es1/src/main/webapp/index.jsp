<%@ page session="true" %>
	<%@ page import="esame.*" %>
		<%@ page import="com.google.gson.Gson" %>
			<%@ page import="java.time.LocalDate" %>
				<%@ page import="java.util.*" %>

					<% synchronized (this){ LocalDate lastDate=(LocalDate)
						this.getServletContext().getAttribute("lastUpdate"); if (lastDate==null){ // Primo utente in
						assoluto this.getServletContext().setAttribute("lastUpdate", LocalDate.now()); } else{ if
						(!lastDate.equals(LocalDate.now())){ // Prima richiesta nella nuova giornata
						this.getServletContext().setAttribute("lastUpdate", LocalDate.now());
						this.getServletContext().setAttribute("mappaSessioni", new HashMap<String, Integer>());
						}
						}
						}
						Map<String, Integer> mappaSessioni = (Map<String, Integer>)
								this.getServletContext().getAttribute("mappaSessioni");
								%>

								<html>

								<head>
									<title>Start Web Application</title>
									<link type="text/css" href="styles/default.css" rel="stylesheet">
									</link>
								</head>

								<body>
									<% if (mappaSessioni==null || mappaSessioni.get(request.getSession().getId()) <
										100){ %>
										<p>
										<form action="j1.jsp" method="post">
											<textarea name="textField" id="textField" maxlength="1000" cols="50"
												rows="30"></textarea>
											<input type="submit" />
										</form>
										<script type="text/javascript">
											document.getElementById('textField').addEventListener('input', function () {
												var inputText = this.value;
												if (inputText.match(/^.*[0-9].*$/)) {
													alert("Non sono consentiti caratteri numerici!");
													let newText = inputText.slice(0, -1)
													document.getElementById('textField').value = newText;
												}
											});
										</script>
										<% Gson g=new Gson(); String jsonResponse=(String)
											request.getAttribute("response"); if (jsonResponse !=null){ Response
											resp=g.fromJson(jsonResponse, Response.class); %>
											<div>
												Auguri compare <%= resp.getCountAuguri() %> volte<br></br>
													Felici compare <%= resp.getCountFelici() %> volte<br></br><br></br>
														Auguri � comparso <%=
															this.getServletContext().getAttribute("totalAuguri") %>
															volte nel nostro sito<br></br>
															Felici � comparso <%=
																this.getServletContext().getAttribute("totalFelici") %>
																volte nel nostro sito<br></br>
																Richieste di oggi: <%=
																	mappaSessioni.get(request.getSession().getId())%>
											</div>


											<% } else {%>
												Troppe richieste per oggi! torna dopo mezzanotte (coglione)
												<% } %>
													</p>

								</body>

								</html>