<?php
$name = $_POST['name'];
$mob_no = $_POST['phone'];
$email = $_POST['email'];
$org = $_POST['org'];
$message = $_POST['message'];

//   $to="info@leadingedgeft.com";
   $to="webbala006@gmail.com";
   $header="From: Fundevelopers Assistant <Assistant@fundevelopers.tech>";
  $mssg="
  Client Name : $name
  Client Contact Number : $mob_no
  Client Email ID : $email
  Client Company / Organization  : $org
  Client Message : $message";
// echo $mssg;
  $subject="New Client for Leading Edge";
  if(isset($_POST['submit']))
  {
    //   echo "true";
  if(mail($to,$subject,$mssg,$header))
  {
    //   echo "success";
     header("Location:index.html");
  }
  else {
     echo "Failed. Try again later";
  }
  }
  else{
      //header("Location:index.html");
       echo("failed");
  }
 ?>
