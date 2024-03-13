<?php
// Start session
session_start();

// Database connection
$conn = new mysqli("localhost", "root", "", "form-imam-ali");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query to fetch user from database
    $sql = "SELECT * FROM user WHERE user_Name='$username' AND Password='$password'   ";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User found, set session and redirect to dashboard
        $_SESSION['username'] = $username;
        header("Location: index.html");
        exit();
    } else {
        // Invalid credentials, redirect back to login page
        header("Location: test.html");
        exit();
    }
} else {
    // Redirect to login page if accessed directly
    header("Location: index.html");
    exit();
}
