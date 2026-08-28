<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $role = $_POST['role'];
    
    // For now we just redirect back with success message
    // Later you can add: save to database, send email, etc.
    
    header("Location: index.html?status=success");
    exit();
}
?>
