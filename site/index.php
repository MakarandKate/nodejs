<html>
<head>
</head>
<body>
	<h1>Login page</h1>
	<button onclick="initLogin()">Login</button>
	<table id="table" style="display: none;">
		<tr>
			<td>Name</td>
			<td><span id="sp-name"></span></td>
		</tr>
		<tr>
			<td>Email</td>
			<td><span id="sp-email"></span></td>
		</tr>
		<tr>
			<td>Phone</td>
			<td><span id="sp-phone"></span></td>
		</tr>
		<tr>
			<td>Age</td>
			<td><span id="sp-age"></span></td>
		</tr>
	</table>
</body>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script type="text/javascript" src="NoLogin.js"></script>
<script type="text/javascript">
	function initLogin(){
		new NoLogin();	
	}
	
</script>
</html>