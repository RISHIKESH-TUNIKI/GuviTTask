<?php
echo "Hello";
$servername = "localhost";
$username = "root";
$password = "Rishikh@1532";
$dbname = "mydb";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " .mysqli_connect_error());
}
echo $conn;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    echo $email.$username.$password;
    $stmt = $conn->prepare("INSERT INTO users (email, username, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);

    if ($stmt->execute()) {
        // Registration successful, send a response to the client
        echo "Registration successful";

        // Additional: You can also include user information in the response if needed

        // Redirect to the profile page using JavaScript
        // echo "<script> window.location.href = 'profile.html'; </script>";
    } else {
        // Registration failed, send an error response to the client
        echo "Error during registration: " . $stmt->error;
        // echo "<script> window.location.href = 'register.html'; </script>";
    }

    $stmt->close();
    $conn->close();
}
?>

