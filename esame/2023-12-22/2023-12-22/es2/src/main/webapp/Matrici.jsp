<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>

<% int nMatrici = Integer.parseInt(request.getParameter("nMatrici")); %>

<html>
<head>
<meta charset="ISO-8859-1">
<title>Matrici</title>
<script type="text/javascript" src="scripts/utilsMatrici.js"></script>
</head>
<body>
<div>
<% for (int m = 0; m < nMatrici; m++){ %>
	<table>
		<% for (int row = 0; row < 3; row++){ %> 
			<tr>
			<% for (int col = 0; col < 3; col++){ %>
				<td> 
					<input style="height:30pt; width:30pt" type="text" id="cell-<%= m %>-<%= row %>-<%=col %>"  />
				</td>
			<%} %>
			</tr>
	<% }%>
	</table>
	<br></br>
	<br></br>
<% }%>
<button onclick="invia(<%= nMatrici %>)">Invia!</button>
<script>
	for (let m = 0; m < <%=nMatrici%>; m++){
		for(let row = 0; row < 3; row++){
			for (let col =0; col < 3; col++){
				document.getElementById("cell-"+m+"-"+row+"-"+col).addEventListener('input', function() {
					
					if (isNaN(parseFloat(this.value))){
                        alert("Inserire un valore numerico nella cella: " + row +", " + col + " nella matrice "+ (m+1));
                    }
				})
			}
		}	
	}
</script>

</div>
</body>
</html>