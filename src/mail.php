<?php
// from the form
    $fname = trim(strip_tags($_POST['firstName']));
    $lname = trim(strip_tags($_POST['lastName']));
    $email = htmlentities($_POST['email']);
    $message = htmlentities($_POST['message']);

// combind first name and last name into one
    $name = $fname. " ". $lname;

// setup 
    $subject = "$name";
    $to = 'hunterstevenshaw@gmail.com';
    
    $body = $message;

    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

// send the email
    mail($to, $subject, $body, $headers);

// redirect
    header('./');
?>