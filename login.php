<?php
session_start();

$username = "anavi";
$password = "12345";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['username'] == $username && $_POST['password'] == $password) {
        $_SESSION['authenticated'] = true;
        header('Location: members.php');
    } else {
        $error = "Invalid username or password.";
    }
}
?>

