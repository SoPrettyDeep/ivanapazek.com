<?php
session_start();

if (!isset($_SESSION['authenticated']) || !$_SESSION['authenticated']) {
    header('Location: login.php');
    exit;
}

// The rest of your members-only content goes here
?>

<!DOCTYPE html>
<html>
<head>
    <title>Members Only Page</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Welcome!</h1>
    <!-- The rest of your members-only content goes here -->
</body>
</html>





